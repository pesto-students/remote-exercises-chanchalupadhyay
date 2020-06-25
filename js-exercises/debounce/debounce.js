// not working --implementation going
function debounce(fn, timeInMs) {
  console.log(fn, timeInMs);

  let time;
  return function () {
    if (time) clearTimeout(time);
    else {
      time = setTimeout(fn, timeInMs);
    }
  };
}

export { debounce };
