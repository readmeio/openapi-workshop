const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'paths./hoot/{id}.get'.split('.');
  const messages = checkPaths(userSpec, requiredPaths);

  return messages;
};

module.exports = solution;
