const checkPaths = require('../../utils/checkPaths');

module.exports = require('../../utils/execute')(__dirname, (exercise, apiDefinition) => {
  const requiredPaths = checkPaths(apiDefinition, ['paths./hoot.post.description']);

  const errors = [
    exercise.workshopper.__('common.exercise.fail.missingPaths', {
      paths: requiredPaths.map(err => `* \`${err}\``).join('\n'),
    }),
  ];

  return [!requiredPaths.length, errors];
});
