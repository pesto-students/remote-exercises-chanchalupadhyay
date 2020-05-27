const animalSort = (animals) => {
  animals.sort(function (previous, current) {
    if (previous.numberOfLegs === current.numberOfLegs)
      return previous.name > current.name ? 1 : -1;
    return previous.numberOfLegs > current.numberOfLegs ? 1 : -1;
  });
  return animals;
};

export { animalSort };
