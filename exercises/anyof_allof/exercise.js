const checkPaths = require('../../utils/checkPaths');

module.exports = require('../../utils/execute')((exercise, apiDefinition) => {
  const requiredPaths = checkPaths(apiDefinition, [
    'paths./hoot/{id}.get.responses.200.content.application/json.schema.anyOf',
  ]);

  const errors = [
    exercise.workshopper.__('common.exercise.fail.missingPaths', {
      paths: requiredPaths.map(err => `* \`${err}\``).join('\n'),
    }),
  ];

  return [!requiredPaths.length, errors];
});
