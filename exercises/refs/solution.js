const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'components.schemas.Hoot'.split('.');

  return checkPaths(userSpec, requiredPaths);
};

module.exports = solution;
