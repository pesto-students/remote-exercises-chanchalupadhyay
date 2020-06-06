const zCharCode = 122;
const ZCharCode = 90;
const alphabeticShift = (inputString) => {
  let alphabetShifted = "";
  for (let i = 0; i < inputString.length; i++) {
    let asciiNumberOfString = inputString.charCodeAt(i);

    if (asciiNumberOfString == zCharCode) {
      alphabetShifted += "a";
    } else if (asciiNumberOfString == ZCharCode) {
      alphabetShifted += "A";
    } else {
      alphabetShifted += String.fromCharCode(asciiNumberOfString + 1);
    }
  }

  return alphabetShifted;
};

export { alphabeticShift };
