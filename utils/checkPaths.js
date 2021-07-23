/* eslint-disable no-restricted-syntax */
const get = require('lodash.get');

module.exports = function (obj, paths) {
  const missingPaths = new Set();

  paths.forEach(path => {
    let cumulativePath = '';
    for (const leaf of path.split('.')) {
      if (!cumulativePath) {
        cumulativePath = leaf;
      } else {
        cumulativePath += `.${leaf}`;
      }

      if (!get(obj, cumulativePath)) {
        missingPaths.add(cumulativePath);
        break;
      }
    }
  });

  return [...missingPaths];
};
