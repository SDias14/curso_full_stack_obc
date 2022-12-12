"use strict";

var weightedAverage = function weightedAverage() {
  for (var _len = arguments.length, entries = new Array(_len), _key = 0; _key < _len; _key++) {
    entries[_key] = arguments[_key];
  }
  var sum = entries.reduce(function (acc, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return acc + number * weight;
  }, 0);
  var weightSum = entries.reduce(function (acc, entry) {
    return acc + entry.weight;
  }, 0);
  return sum / weightSum;
};
console.log(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7,
  weight: 1
}, {
  number: 10,
  weight: 1
}));

////////////////////////////    

function averageScore() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  return numbers.reduce(function (total, number) {
    return total + number;
  }, 0) / numbers.length;
}

//////////

var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  } else {
    var firstMiddle = orderedNumbers[middle - 1];
    var secondMiddle = orderedNumbers[middle];
    return averageScore(firstMiddle, secondMiddle);
  }
};
console.log(median(2, 5, 99, 4, 42, 7));
console.log(median(15, 14, 8, 7, 3));

///////////////////////

var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return n === num;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));