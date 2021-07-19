const workshopper = require('workshopper-adventure');
const path = require('path');
const header = require('workshopper-adventure/default/header');

const workshop = workshopper({
  appDir: __dirname,
  languages: ['en'],
  header,
  footer: [
    {
      file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
    },
  ],
});

workshop.addAll([
  'TITLES',
  // 'HEADINGS',
  // 'EMPHASIS',
  // 'LISTS',
  // 'LINKS',
  // 'IMAGES',
  // 'BLOCKQUOTES',
  // 'CODE',
  // 'TABLES',
  // 'HORIZONTAL RULES',
  // 'HTML',
  // 'GFM',
]);

module.exports = workshop;
