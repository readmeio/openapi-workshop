const solution = userSpec => {
  const messages = [];

  if (userSpec?.info?.title !== 'ReadMe Petstore') {
    messages.push(
      `'title' is wrong! You entered '${userSpec?.info?.title}', when it should have been 'ReadMe Petstore'`
    );
  }

  return messages;
};

export default solution;
