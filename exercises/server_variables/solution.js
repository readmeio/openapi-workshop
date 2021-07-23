const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'servers[0].variables.basePath.default'.split('.');

  return checkPaths(userSpec, requiredPaths);
};

module.exports = solution;
