const solution = userSpec => {
  if (userSpec.translateAbs) return [];

  const messages = [];

  if (userSpec && userSpec.info && userSpec.info.title !== 'Hoot Hoot') {
    messages.push(`'title' is wrong! You entered '${userSpec.info.title}', when it should have been 'Hoot Hoot'`);
  }

  return messages;
};

module.exports = solution;
