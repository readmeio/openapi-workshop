const exercise = require('../../utils/execute');
const checkPaths = require('../../utils/checkPaths');

exercise.addSetup(function (mode, cb) {
  const apiDefinition = this.apiDefinition;

  const requiredPaths = checkPaths(apiDefinition, ['components.schemas.Hoot']);

  if (requiredPaths.length) {
    this.errors.push(
      exercise.workshopper.__('common.exercise.fail.missingPaths', {
        paths: requiredPaths.map(err => `* \`${err}\``).join('\n'),
      })
    );
  }

  cb();
});

module.exports = exercise;
