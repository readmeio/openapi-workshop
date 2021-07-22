const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'paths./hoot.post.responses.200'.split('.');

  return checkPaths(userSpec, requiredPaths);
};

module.exports = solution;
