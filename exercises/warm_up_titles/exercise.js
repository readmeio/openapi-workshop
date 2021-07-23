module.exports = require('../../utils/execute')(__dirname, (exercise, apiDefinition) => {
  let pass = true;
  const errors = [];

  if (apiDefinition && apiDefinition.info && apiDefinition.info.title !== 'Hoot Hoot') {
    pass = false;
    errors.push(exercise.__('fail.title', { title: apiDefinition.info.title }));
  }

  return [pass, errors];
});
