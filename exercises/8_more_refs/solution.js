const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'components.schemas.Squawk'.split('.');
  const messages = checkPaths(userSpec, requiredPaths);

  return messages;
};

module.exports = solution;
