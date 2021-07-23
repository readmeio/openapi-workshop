const exercise = require('../../lib/execute');

exercise.addSetup(function (mode, cb) {
  const apiDefinition = this.apiDefinition;

  if (apiDefinition && apiDefinition.info && apiDefinition.info.title !== 'Hoot Hoot') {
    this.errors.push(exercise.__('fail.title', { title: apiDefinition.info.title }));
  }

  cb();
});

module.exports = exercise;
