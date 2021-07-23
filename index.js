const workshopper = require('workshopper-adventure');
const path = require('path');
const header = require('workshopper-adventure/default/header');
const fs = require('fs');
const fsPromises = require('fs').promises;
const pkg = require('./package.json');

const workshop = workshopper({
  appDir: __dirname,
  appRepo: pkg.homepage,
  exerciseDir: path.join(__dirname, 'exercises'),
  languages: ['en'],
  header,
  menu: {
    width: 100,
  },
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

const { selectExercise } = workshop;

workshop.selectExercise = async (...args) => {
  selectExercise.apply(workshop, args);

  let [exercise] = args;
  exercise = exercise.trim().replace(/\s/g, '_');

  let exerciseName = workshop.exercises.find(name => {
    return name.replace(/\s/g, '_').toLowerCase() === exercise.toLowerCase();
  });

  if (!exerciseName) {
    exerciseName = exercise === '0' ? workshop.exercises[0] : workshop.exercises[exercise - 1];
    if (!exerciseName) {
      throw new Error('Unknown exercise supplied.');
    }
  }

  // Have to lowercase the exercise name to be compatible with case-sensitive file systems.
  exerciseName = exerciseName.toLowerCase().replace(/\s/g, '_');

  const filename = path.join(__dirname, 'exercises', exerciseName, `template.json`);
  const answersDir = path.join(__dirname, 'answers');

  try {
    // eslint-disable-next-line no-bitwise
    await fsPromises.access(answersDir, fs.constants.R_OK | fs.constants.W_OK);
  } catch (e) {
    await fsPromises.mkdir(answersDir);
  }

  fs.copyFile(filename, path.join(answersDir, `${exerciseName.toLowerCase()}.json`), err => {
    if (err) throw err;
  });
};

module.exports = workshop;
