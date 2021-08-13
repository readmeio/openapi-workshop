const exercise = require('../../lib/execute');

exercise.addSetup(function (mode, cb) {
  // Process `this.apiDefinition` and look for errors and then push them to `this.errors`.

  cb();
});

module.exports = exercise;

