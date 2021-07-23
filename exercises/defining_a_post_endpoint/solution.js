const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'paths./hoot.post.description'.split('.');

  return checkPaths(userSpec, requiredPaths);
};

module.exports = solution;
