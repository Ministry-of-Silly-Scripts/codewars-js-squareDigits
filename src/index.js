const squareDigits = (num) => {
  outArray = intDigitsToArray(num);
  outArraySquare = squareDigitsOfArray(outArray);

  out = "";

  for (e of outArraySquare) {
    out += e.toString();
  }

  return parseInt(out);
};


const intDigitsToArray = (num) => {
  numToString = num.toString();
  out = []
  for (c of numToString) {
    out.push(parseInt(c))
  }

  return out;
}

const squareDigitsOfArray = (arr) => {
  out = []

  for (e of arr) {
    out.push(e * e)
  }

  return out
}

module.exports = {
  squareDigits,
  intDigitsToArray,
  squareDigitsOfArray,
};
