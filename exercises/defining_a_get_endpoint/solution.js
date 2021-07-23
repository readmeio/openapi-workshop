const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'paths./hoot/{id}.get'.split('.');

  return checkPaths(userSpec, requiredPaths);
};

module.exports = solution;
