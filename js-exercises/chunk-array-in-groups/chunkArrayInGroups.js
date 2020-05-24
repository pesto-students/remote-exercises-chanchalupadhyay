function chunkArrayInGroups(array, chunkSize) {
  let lengthOfArray = array.length;
  let index = 0;
  let chunkArray = [];
  let lengthOfChunkArray = 0;
  let chunkArraySize = chunkSize;
  let numberOfRows = Math.ceil(lengthOfArray / chunkSize);
  let i;

  // loop to create 2d array using 1d
  for (i = 0; i < numberOfRows; i++) {
    chunkArray[i] = [];
  }

  for (let row = 0; row < numberOfRows; row++) {
    for (let column = 0; column < chunkArraySize; column++) {
      chunkArray[row][column] = array[index++];
      lengthOfChunkArray++;
    }

    chunkArraySize = lengthOfArray - lengthOfChunkArray;
    if (chunkArraySize > chunkSize) chunkArraySize = chunkSize;
  }
  return chunkArray;
}

export { chunkArrayInGroups };
