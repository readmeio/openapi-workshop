const checkPaths = require('../../utils/checkPaths');

module.exports = require('../../utils/execute')((exercise, apiDefinition) => {
  const requiredPaths = checkPaths(apiDefinition, ['paths./hoot.post.responses.200', 'paths./hoot.post.responses.403']);

  const errors = [
    exercise.workshopper.__('common.exercise.fail.missingPaths', {
      paths: requiredPaths.map(err => `* \`${err}\``).join('\n'),
    }),
  ];

  return [!requiredPaths.length, errors];
});
