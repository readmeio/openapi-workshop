const exercise = require('../../lib/execute');

exercise.addPrepare(function (cb) {
  const shop = this.workshopper;

  shop.options.footer = [];
  shop.markCompleted(this.name, () => {
    cb();
  });
});

module.exports = exercise;
