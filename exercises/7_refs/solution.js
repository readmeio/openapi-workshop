const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'components.schemas.Hoot'.split('.');
  const messages = checkPaths(userSpec, requiredPaths);

  return messages;
};

module.exports = solution;
