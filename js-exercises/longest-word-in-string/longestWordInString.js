function longestWordInString(...args) {
  let [string] = args;
  let sortWordsByLength = string.split(" ").sort((a, b) => b.length - a.length);

  return sortWordsByLength[0].length;
}

export { longestWordInString };
