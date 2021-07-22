require('colors');
const diff = require('diff');

module.exports = (attempt, solution) => {
  // Compare solution and attempt results
  const parts = diff.diffWordsWithSpace(attempt, solution);

  // return diff
  return (
    parts
      // eslint-disable-next-line unicorn/no-nested-ternary
      .map(part => (part.added ? part.value.red.inverse : part.removed ? part.value.green.inverse : part.value))
      .join('')
  );
};
