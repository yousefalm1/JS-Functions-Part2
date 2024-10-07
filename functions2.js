// Task 1
function isOdd(n) {
  return n % 2 === 1;
}

console.log(isOdd(2));

// Task 2

function oddSmallerThan(n) {
  return Math.floor(n / 2);
}

console.log(oddSmallerThan(15));

// Task 3
function SquareOrDouble(n) {
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n * n;
  }
}

console.log(SquareOrDouble(9));
