const checkPaths = require('../../utils/checkPaths');

module.exports = require('../../utils/execute')((exercise, apiDefinition) => {
  const requiredPaths = checkPaths(apiDefinition, ['servers[0].variables.basePath.default']);

  const errors = [
    exercise.workshopper.__('common.exercise.fail.missingPaths', {
      paths: requiredPaths.map(err => `* \`${err}\``).join('\n'),
    }),
  ];

  return [!requiredPaths.length, errors];
});
