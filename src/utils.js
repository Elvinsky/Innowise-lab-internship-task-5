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
  let guess = Math.pow(Math.abs(num), 1 / n);
  const tolerance = 0.0000001;
  let error = Infinity;
  while (error > tolerance) {
    const newGuess = ((n - 1) * guess + num / Math.pow(guess, n - 1)) / n;
    error = Math.abs(newGuess - guess);
    guess = newGuess;
  }
  if (num < 0 && n % 2 === 1) {
    return -guess;
  } else {
    return guess;
  }
};
export const factorialFunc = (x) => {
  if (x === 0 || x === 1) {
    return 1;
  } else {
    return x * factorialFunc(x - 1);
  }
};
