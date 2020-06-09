// function makeRangeIterator(start, end) {
//   let index = start;
//   let result;
//   const iterator = {
//     next() {
//       if (index <= end) {
//         result = { value: index, done: false };

//         index += 1;
//         return result;
//       }
//       return { done: true };
//     },
//   };
//   return iterator;
// }

function* makeRangeIterator(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}
function rangeIter(lb, ub) {
  if (!lb || !ub) throw new TypeError("/undefined is not a number/");
  if (typeof lb !== "number" || typeof ub !== "number")
    throw new TypeError("undefined is not a number/");

  let iterable = makeRangeIterator(lb, ub);
  let outcomeArray = [];
  let result = iterable.next();

  while (!result.done) {
    outcomeArray.push(result.value);
    result = iterable.next();
  }
  return outcomeArray;
}

export { rangeIter };
