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
    return 1 / powerFunc(x, -y);
  }
};
export const factorialFunc = (x) => {
  if (x === 0 || x === 1) {
    return 1;
  } else {
    return x * factorialFunc(x - 1);
  }
};