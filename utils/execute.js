require('colors');

const exercise = require('workshopper-exercise')();
const fs = require('fs');
const OASNormalize = require('oas-normalize');

module.exports = problemExecutor => {
  exercise.addPrepare(cb => {
    // Overload the workshopper options to forcefully allow us to embed the current exercise id (eg.
    // `2_warm_up_titles.json`) in our footer.
    exercise.workshopper.options.exerciseId = exercise.id;
    cb(null, true);
  });

  exercise.addVerifyProcessor(cb => {
    const filename = exercise.args[0];
    const attempt = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const oas = new OASNormalize(attempt);

    const shop = exercise.workshopper;

    oas
      .validate()
      .then(apiDefinition => {
        const [pass, errors] = problemExecutor(exercise, apiDefinition);
        if (pass) {
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
        }

        if (exercise.__.has('fail.hint') && exercise.__('fail.hint').length > 0) {
          errors.push(
            shop.__('common.exercise.fail.hint', {
              link: exercise.__('fail.hint').blue,
            })
          );
        }

        exercise.emit('fail', errors);

        return cb(null, false);
      })
      .catch(err => {
        if ('full' in err) {
          // OAS validation errors
          exercise.emit('fail', shop.__('common.exercise.fail.validation', { error: err.full.message }));
          return cb(null, false);
        } else if (err.name === 'MissingPointerError') {
          // JSON pointer validation errors
          exercise.emit(
            'fail',
            shop.__('common.exercise.fail.validation', { error: err.message.replace(/"/g, '`').reset })
          );

          return cb(null, false);
        }

        throw err;
      });
  });

  return exercise;
};
