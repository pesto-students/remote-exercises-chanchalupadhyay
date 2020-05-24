const sumEvenArgs = (...args) => {
  let evenNumberOfArray = args.filter((even) => even % 2 == 0);

  if (!evenNumberOfArray.length) return 0;
  let sumOfEvenNumber = evenNumberOfArray.reduce((pre, acc) => pre + acc);

  return sumOfEvenNumber;
};

export { sumEvenArgs };
