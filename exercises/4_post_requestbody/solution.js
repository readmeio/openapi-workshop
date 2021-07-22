const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'paths./hoot.post.requestBody.content.application/json.schema.properties.replyto'.split('.');

  return checkPaths(userSpec, requiredPaths);
};

module.exports = solution;
