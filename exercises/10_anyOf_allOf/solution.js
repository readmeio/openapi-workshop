const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  if (userSpec.translateAbs) return;

  const requiredPaths = 'paths./hoot/{id}.get.responses.200.content.application/json.schema.anyOf'.split('.');
  return checkPaths(userSpec, requiredPaths);
};

module.exports = solution;
