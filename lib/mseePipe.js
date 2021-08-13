/**
 * `workshopper-adventure` doesn't offer any options to override its `print` command, and internal
 * usage of `msee`, so we need to fork it into here so we can have wider Markdown screens.
 *
 * @license MIT
 * @link https://github.com/workshopper/workshopper-adventure
 */
const msee = require('./msee');
const through = require('through2');

module.exports = function () {
  const buffer = [];
  return through(
    function (contents, encoding, done) {
      buffer.push(contents.toString());
      done();
    },
    function (done) {
      const contents = buffer.join('\n');

      let str = msee(contents).replace(/^/gm, ' ').replace(/$/gm, '  ');
      str = str.substr(0, str.length - 3);
      this.push(str);
      done();
    }
  );
};
