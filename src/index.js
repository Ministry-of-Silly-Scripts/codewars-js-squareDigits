const squareDigits = (num) => {
  outArray = num.toString().split('');
  outArraySquare = squareDigitsOfArray(outArray);

  return parseInt(outArraySquare.join(''));
};

// const intDigitsToArray = (num) => {
//   numToString = num.toString();
//   out = []
//   for (c of numToString) {
//     out.push(parseInt(c))
//   }

//   return out;
// }

const squareDigitsOfArray = (arr) => {
  out = []

  for (e of arr) {
    out.push(e * e)
  }

  return out
}

module.exports = {
  squareDigits,
  squareDigitsOfArray,
};
