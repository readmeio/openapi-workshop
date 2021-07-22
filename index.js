const workshopper = require('workshopper-adventure');
const path = require('path');
const header = require('workshopper-adventure/default/header');
const fs = require('fs');
const fsPromises = require('fs').promises;
const pkg = require('./package.json');

const workshop = workshopper({
  appDir: __dirname,
  appRepo: pkg.homepage,
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

const exercises = [
  '1 WELCOME',
  '2 WARM UP TITLES',
  '3 DEFINING A POST ENDPOINT',
  '4 POST REQUESTBODY',
  '5 POST RESPONSE',
  '6 DEFINING A GET ENDPOINT',
  '7 REFS',
  '8 MORE REFS',
  '9 SERVER VARIABLES',
  '10 ANYOF ALLOF',
  '11 FIN',
];

workshop.addAll(exercises);

const { selectExercise } = workshop;

workshop.selectExercise = async (...args) => {
  selectExercise.apply(workshop, args);

  let [exercise] = args;
  exercise = exercise.trim().replace(/\s/g, '_');

  let exerciseName = exercises.find(name => {
    return name.replace(/\s/g, '_').toLowerCase() === exercise.toLowerCase();
  });

  if (!exerciseName) {
    exerciseName = exercises[exercise - 1];
    if (!exerciseName) {
      throw new Error('Unknown exercise supplied.');
    }
  }

  // Have to lowercase the exercise name to be compatible with case-sensitive file systems.
  exerciseName = exerciseName.toLowerCase().replace(/\s/g, '_');

  const filename = path.join(__dirname, 'exercises', exerciseName, `template.json`);
  try {
    // eslint-disable-next-line no-bitwise
    await fsPromises.access('answers/', fs.constants.R_OK | fs.constants.W_OK);
  } catch (e) {
    await fsPromises.mkdir('answers');
  }

  fs.copyFile(filename, `answers/${exerciseName.toLowerCase()}.json`, err => {
    if (err) throw err;
  });
};

module.exports = workshop;
