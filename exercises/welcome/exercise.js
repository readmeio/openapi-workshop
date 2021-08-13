const exercise = require('../../lib/execute');

exercise.addPrepare(function (cb) {
  const shop = this.workshopper;

  // This exercise should auto-advance.
  shop.options.footer = [shop.__('ui.advance')];
  shop.markCompleted(this.name, () => {
    cb();
  });
});

module.exports = exercise;
