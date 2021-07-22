const workshopper = require('workshopper-adventure');
const path = require('path');
const header = require('workshopper-adventure/default/header');
const fs = require('fs');

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
  '1 TITLES',
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

const { selectExercise } = workshop;

workshop.selectExercise = (...args) => {
  selectExercise.apply(workshop, args);
  const [exercise] = args;
  const filename = path.join(__dirname, 'exercises', exercise.replace(/\s/g, '_'), `template.json`);
  fs.copyFile(filename, `answers/${exercise.replace(/\s/g, '_').toLowerCase()}.json`, err => {
    if (err) throw err;
  });
};

module.exports = workshop;
