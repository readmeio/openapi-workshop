const checkPaths = require('../../utils/checkPaths');

const solution = userSpec => {
  const requiredPaths = 'paths./hoot.post.requestBody.content.application/json.schema.properties.replyto'.split('.');
  const messages = checkPaths(userSpec, requiredPaths);

  return messages;
};

module.exports = solution;
