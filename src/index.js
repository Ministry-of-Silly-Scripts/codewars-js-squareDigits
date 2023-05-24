const squareDigits = (num) => {
  out = num
    .toString()
    .split("")
    .map(num => parseInt(num))
    .map(num => num * num)
    .join("")

  return parseInt(out);
};

module.exports = {
  squareDigits,
};
