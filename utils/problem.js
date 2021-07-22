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

  exports.init = function init() {
    this.problem = { file: path.join(dirname, `readme.md`) };
    // eslint-disable-next-line import/no-dynamic-require
    this.solution = require(`${dirname}/solution.js`);
    this.troubleshooting = path.join(__dirname, '..', 'i18n', 'troubleshooting', `readme.md`);
  };

  exports.verify = function verify(args, done) {
    const filename = args[0];
    const attempt = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const oas = new OASNormalize(attempt);

    const runSolution = () => {
      const errors = this.solution(attempt);

      if (errors.length > 0) {
        errors.forEach(error => console.log(error));
        done(false);
      }

      done(true);
    };

    oas
      .validate()
      .then(definition => {
        runSolution();
      })
      .catch(err => {
        console.log(err.errors);
        done(false);
      });

    return done(false);
  };

  return exports;
};
