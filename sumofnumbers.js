const testArray = [1, 2, 3, 4, 5];

function sumFor(numArray) {
  let sum = 0;
  for (const array of numArray) {
    sum += array;
  }
  return sum;
}

function sumWhile(numArray) {
  let sum = 0;
  let i = 0;
  while (i < numArray.length) {
    sum += numArray[i];
    i++;
  }
  return sum;
}

function sumRecursion(numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  return numArray[0] + sumRecursion(numArray.slice(1, numArray.length));
}

function sumTheSimpleWay(numArray) {
  return _.reduce(numArray, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray));
console.log(sumTheSimpleWay(testArray));
