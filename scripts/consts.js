export const valuesArr = [
  '1/x',
  'x^2',
  'MC',
  'C',
  '+/-',
  '%',
  '/',
  'x^-2',
  'x^3',
  'M+',
  '7',
  '8',
  '9',
  'X',
  'x^-3',
  'x^y',
  'M-',
  '4',
  '5',
  '6',
  '-',
  'x^-y',
  'x!',
  'MS',
  '1',
  '2',
  '3',
  '+',
  '',
  '0',
  '.',
  '='
];
export const primaryInd = [10, 11, 12, 17, 18, 19, 24, 25, 26, 29, 30];
export const actionsInd = [6, 13, 20, 27, 31];
export const powerFunc = (x, y) => {
  if (y === 0) {
    return 1;
  } else if (y > 0) {
    return x * powerFunc(x, y - 1);
  } else {
    return 1 / (x * powerFunc(x, -y - 1));
  }
};
export const rootFunc = (num, n) => {
  // Check for negative numbers
  if (num < 0 && n % 2 === 0) {
    return NaN;
  }

  // Set initial guess for the nth root
  let guess = Math.pow(Math.abs(num), 1 / n);

  // Use Newton's method to refine guess
  const tolerance = 0.0000001; // Set desired level of accuracy
  let error = Infinity; // Set initial error value
  while (error > tolerance) {
    const newGuess = ((n - 1) * guess + num / Math.pow(guess, n - 1)) / n;
    error = Math.abs(newGuess - guess);
    guess = newGuess;
  }

  // Return nth root
  if (num < 0 && n % 2 === 1) {
    return -guess;
  } else {
    return guess;
  }
};
export const factorialFunc = (x) => {
  if (x !== parseFloat(x)) {
    alert('factorial is available only for integers');
    return NaN;
  }
  if (x === 0 || x === 1) {
    return 1;
  } else {
    return x * factorialFunc(x - 1);
  }
};
