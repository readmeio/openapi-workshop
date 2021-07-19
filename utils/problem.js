const fs = require('fs');
const path = require('path');
const remark = require('remark');
const html = require('remark-html');
const express = require('express');
const chokidar = require('chokidar');
const open = require('openurl').open;
const equal = require('deep-equal');
const OASNormalize = require('oas-normalize');

const fail = require('./fail');

module.exports = dirname => {
  const exports = {};

  exports.init = function init(workshopper) {
    // Get lang code
    const lang = workshopper.i18n.lang();

    this.problem = { file: path.join(dirname, `${lang}.md`) };
    this.solution = require(`${dirname}/solution/solution.js`);
    this.troubleshooting = path.join(__dirname, '..', 'i18n', 'troubleshooting', `${lang}.md`);
  };

  exports.verify = function verify(args, done) {
    const filename = args[0];
    const attempt = fs.readFileSync(filename, 'utf8');

    // console.log('WHOAAAAA: ', solution);

    const oas = new OASNormalize(attempt); // Or a string, pathname, JSON blob, whatever

    oas
      .validate()
      .then(definition => {
        console.log('YAY IT PASSED', definition); // definition will always be JSON, and valid
        done(true);
      })
      .catch(err => {
        done(false);
        console.log(err.errors);
      });

    // exports.fail = fail({
    //   filename,
    //   attempt,
    //   solution,
    //   troubleshooting: this.troubleshooting,
    // });

    return done(false);
  };

  exports.run = function run(args, done) {
    const filename = args[0];

    const processor = remark().use(html);
    const watcher = chokidar.watch(filename);
    const server = express();

    let result = '';

    watcher.on('add', file => {
      console.log(`${file} has been added.`);
      result = processor().processSync(fs.readFileSync(filename, 'utf8'));
    });

    watcher.on('change', file => {
      console.log(`${file} has been changed.`);
      result = processor().processSync(fs.readFileSync(filename, 'utf8'));
    });

    watcher.on('unlink', file => {
      console.warn(`${file} has been unlinked.`);
      done();
    });

    watcher.on('error', file => {
      console.error(`${file} has been errored.`);
      done();
    });

    server.get('*', (req, res) => {
      res.send(result.toString());
    });

    server.listen(3000, () => {
      console.log(`
        File is served on http://localhost:3000/
        Hit Ctrl+C to exit.
      `);
      open('http://localhost:3000/');
    });
  };

  return exports;
};
