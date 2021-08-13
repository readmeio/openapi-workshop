require('colors');

const exercise = require('workshopper-exercise')();
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const OASNormalize = require('oas-normalize');

exercise.addPrepare(async function (cb) {
  // If this exercise has a template to work through copy it over for the user. If it doesn't it's probably just an
  // informational exercise.
  const template = path.join(this.dir, 'template.json');
  if (fs.existsSync(template)) {
    const answersDir = path.join(process.cwd(), 'answers');

    try {
      // eslint-disable-next-line no-bitwise
      await fsPromises.access(answersDir, fs.constants.R_OK | fs.constants.W_OK);
    } catch (e) {
      await fsPromises.mkdir(answersDir);
    }

    const answer = path.join(answersDir, `${this.id}.json`);
    if (!fs.existsSync(answer)) {
      await fsPromises.copyFile(template, answer).catch(err => {
        throw err;
      });
    }
  }

  // Overload the workshopper options to forcefully allow us to embed the current exercise id (eg. `more_refs.json`)
  // in our footer.
  exercise.workshopper.options.exerciseId = exercise.id;
  cb(null, true);
});

exercise.addSetup(function (mode, cb) {
  this.skipVerify = false;
  this.errors = [];

  const filename = this.args[0];
  const template = path.join(this.dir, 'template.json');
  if (!fs.existsSync(template)) {
    // If this exercise doesn't have a template for the user to work out of then there's nothing we need to verify and
    // we can skip OAS and exercise validation.
    this.skipVerify = true;

    cb();
    return;
  }

  const self = this;
  const attempt = JSON.parse(fs.readFileSync(filename, 'utf8'));
  const oas = new OASNormalize(attempt);

  oas
    .validate()
    .then(apiDefinition => {
      self.apiDefinition = apiDefinition;

      cb();
    })
    .catch(err => {
      const shop = this.workshopper;

      // OAS validation errors
      if ('full' in err) {
        exercise.emit('fail', shop.__('common.exercise.fail.validation', { error: err.full.message }));
        return false;
      }

      // JSON pointer validation errors
      if (err.name === 'MissingPointerError') {
        exercise.emit(
          'fail',
          shop.__('common.exercise.fail.validation', { error: err.message.replace(/"/g, '`').reset })
        );

        return false;
      }

      throw err;
    });
});

exercise.addVerifyProcessor(function (cb) {
  const shop = this.workshopper;

  if (this.skipVerify) {
    shop.options.footer = [];
    exercise.emit('pass', shop.__('common.exercise.pass.moveAlong'));
    return cb(null, true);
  }

  const errors = this.errors;
  if (errors.length) {
    if (exercise.__.has('fail.hint') && exercise.__('fail.hint').length > 0) {
      errors.push(
        shop.__('common.exercise.fail.hint', {
          link: exercise.__('fail.hint').blue,
        })
      );
    }

    exercise.emit('fail', errors);
    return cb(null, true);
  }

  // Since the user completed the assignment we should show them a contextual footer for advancing to the next
  // exercise instead of re-playing what they just finished.
  shop.options.footer = [shop.__('ui.advance')];

  exercise.emit('pass', [
    // You did it! You're doing it!
    shop.__('common.exercise.pass.success'),

    // Reference guide preview links.
    exercise.__.has('pass.preview')
      ? shop.__('common.exercise.pass.preview', { link: exercise.__('pass.preview') })
      : null,

    // Success aside messages.
    exercise.__.has('pass.aside') ? exercise.__('pass.aside') : null,
  ]);

  return cb(null, true);
});

module.exports = exercise;
