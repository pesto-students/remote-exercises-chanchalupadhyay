const deepCopyObject = (objToCopy) => {
  if (typeof objToCopy !== "object" || objToCopy === null) return objToCopy;

  let newObj = {};

  Object.keys(objToCopy).forEach((key) => {
    newObj[key] = deepCopyObject(objToCopy[key]);
  });
  return newObj;
};

export { deepCopyObject };
