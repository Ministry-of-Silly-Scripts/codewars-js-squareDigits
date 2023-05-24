const squareDigits = () => true;

const intDigitsToArray = (num) => {
  numToString = num.toString();
  out = []
  for (c of numToString) {
    out.push(parseInt(c))
  }

  return out;
}

module.exports = {
  squareDigits,
  intDigitsToArray,
};
