const exercise = require('../../lib/execute');
const checkPaths = require('../../lib/checkPaths');

exercise.addSetup(function (mode, cb) {
  const apiDefinition = this.apiDefinition;

  const requiredPaths = checkPaths(apiDefinition, [
    'paths./hoot/{id}.get.responses.200.content.application/json.schema.anyOf',
  ]);

  if (requiredPaths.length) {
    this.errors.push(
      this.workshopper.__('common.exercise.fail.missingPaths', {
        paths: requiredPaths.map(err => `* \`${err}\``).join('\n'),
      })
    );
  }

  cb();
});

module.exports = exercise;
