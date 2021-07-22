const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'servers.variables.basePath.default'.split('.');
  const messages = checkPaths(userSpec, requiredPaths);

  return messages;
};

module.exports = solution;
