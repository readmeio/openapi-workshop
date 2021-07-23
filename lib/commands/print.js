/**
 * `workshopper-adventure` doesn't offer any options to override its `print` command, and internal
 * usage of `msee`, so we need to fork it into here so we can have wider Markdown screens.
 *
 * @license MIT
 * @link https://github.com/workshopper/workshopper-adventure
 */
exports.aliases = ['print'];
exports.menu = false;
exports.handler = function print(shop, args) {
  const specifier = args.join(' ');
  shop.getExerciseText(specifier, function (err, stream) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    stream
      .pipe(require('../mseePipe')())
      .pipe(process.stdout)
      .on('end', function () {
        process.exit();
      });
  });
};
