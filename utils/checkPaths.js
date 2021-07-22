/* eslint-disable no-restricted-syntax */
const get = require('lodash.get');

module.exports = function (obj, paths) {
  const messages = [];

  let cumulativePath = '';
  for (const path of paths) {
    if (!cumulativePath) {
      cumulativePath = path;
    } else {
      cumulativePath += `.${path}`;
    }
    if (!get(obj, cumulativePath)) {
      messages.push(`You haven't specified the '${cumulativePath}' path!`);
      break;
    }
  }

  return messages;
};
