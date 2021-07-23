const fs = require('fs');
const path = require('path');
const OASNormalize = require('oas-normalize');
require('colors');

module.exports = dirname => {
  const exports = {};

  exports.init = function init(shop, id) {
    this.problem = { file: path.join(dirname, `readme.md`) };

    // Overload the workshopper options to forcefully allow us to embed the current exercise id (eg.
    // `2_warm_up_titles.json`) in our footer.
    // eslint-disable-next-line no-param-reassign
    shop.options.exerciseId = id;
  };

  // Can't use async here because it will console.log [Object Promise]
  exports.verify = function verify(args, done) {
    const filename = args[0];
    const attempt = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const oas = new OASNormalize(attempt);

    oas
      .validate()
      .then(() => {
        const solution = require(`${dirname}/solution.js`);
        const errors = solution(attempt);

        const meta = require(`${dirname}/meta`);

        if (errors.length > 0) {
          console.log('❌ Oops!'.red);
          errors.forEach(error => console.log(error.red));

          if (meta.hint) {
            console.log('');
            console.log('🙋🏼‍♀️ Do you need a hint? If so, use this link for the answer:', meta.hint.blue);
          }

          return done(false);
        }

        console.log('Congrats! You did it! 🎉'.green);
        console.log('');

        if (meta.preview) {
          console.log('See how it renders as a guide on ReadMe:', meta.preview.blue);
          console.log('');
        }

        if (meta.aside) {
          console.log(meta.aside);
          console.log('');
        }

        return done(true);
      })
      .catch(err => {
        console.log(
          "❌ Oops! Validation Failure. If you have an account with us, you can shoot us a message on Intercom (just kidding don't do this)"
            .red
        );

        if (typeof err !== 'undefined') {
          console.log(JSON.stringify(err, null, 2));
        }

        return done(false);
      });
  };

  return exports;
};
