const solution = userSpec => {
  const messages = [];

  console.log(JSON.stringify({ userSpec }, null, 2));
  if (userSpec?.info?.title !== 'ReadMe Petstore') {
    messages.push(
      `'title' is wrong! You entered '${userSpec?.info?.title}', when it should have been 'ReadMe Petstore'`
    );
  }

  return messages;
};

module.exports = solution;
