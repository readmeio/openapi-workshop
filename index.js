const workshopper = require('workshopper-adventure');
const path = require('path');
const header = require('workshopper-adventure/default/header');
const pkg = require('./package.json');

const workshop = workshopper({
  appDir: __dirname,
  appRepo: pkg.homepage,
  exerciseDir: path.join(__dirname, 'exercises'),
  languages: ['en'],
  header,
  footer: [
    {
      file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
    },
  ],
  help: [
    {
      file: path.join(__dirname, 'i18n', 'usage', '{lang}.md'),
    },
  ],
});

workshop.addAll([
  'WELCOME',
  'WARM UP TITLES',
  'DEFINING A POST ENDPOINT',
  'POST REQUESTBODY',
  'POST RESPONSE',
  'DEFINING A GET ENDPOINT',
  'REFS',
  'MORE REFS',
  'SERVER VARIABLES',
  'ANYOF ALLOF',
  'FIN',
]);

module.exports = workshop;
