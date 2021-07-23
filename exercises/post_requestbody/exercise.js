const checkPaths = require('../../utils/checkPaths');

module.exports = require('../../utils/execute')((exercise, apiDefinition) => {
  const requiredPaths = checkPaths(apiDefinition, [
    'paths./hoot.post.requestBody.content.application/json.schema.properties.replyto.type',
    'paths./hoot.post.requestBody.content.application/json.schema.properties.replyto.description',
  ]);

  const errors = [
    exercise.workshopper.__('common.exercise.fail.missingPaths', {
      paths: requiredPaths.map(err => `* \`${err}\``).join('\n'),
    }),
  ];

  return [!requiredPaths.length, errors];
});
