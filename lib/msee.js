/**
 * `workshopper-adventure` doesn't offer any options to override its `print` command, and internal
 * usage of `msee`, so we need to fork it into here so we can have wider Markdown screens.
 *
 * @license MIT
 * @link https://github.com/workshopper/workshopper-adventure
 */
const msee = require('msee');

const mseeOptions = {
  paragraphStart: '',
  paragraphEnd: '\n\n',
  hrChar: '\u2500',
  listItemPad: {
    right: '   ',
    first: '  » ',
    regular: '    ',
  },
  defaultCodePad: '    ',
  paragraphPad: {
    left: ' ',
    right: '   ',
  },
  maxWidth: 98, // 100 - 2 for the 2 character indent that bulletpoints add.
};

module.exports = function (content) {
  return msee.parse(content, mseeOptions);
};
