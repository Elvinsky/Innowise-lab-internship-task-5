export const user = (command) => {
  return command();
};
export const memory = (command) => {
  return command();
};
export const handleSum = (x, y) => {
  return x + y;
};

export const handleDiff = (x, y) => {
  return x - y;
};

export const handlePower = (x, y) => {
  if (y === 0) {
    return 1;
  } else if (y < 0) {
    return 1 / handlePower(x, -y);
  } else if (y % 2 === 0) {
    const temp = handlePower(x, y / 2);
    return temp * temp;
  } else {
    return x * handlePower(x, y - 1);
  }
};

export const handleProcentage = (x, y) => {
  return (y / 100) * x;
};

export const handleFactorial = (x) => {
  if (x <= 1) {
    return 1;
  } else {
    return x * handleFactorial(x - 1);
  }
};

export const handleDivide = (x, y) => {
  return x / y;
};

export const handleMultiply = (x, y) => {
  return x * y;
};

export const changeSign = (x) => {
  return -x;
};
export const handleInput = (x, input) => {
  return input.concat(x);
};

export const MS = (x) => {
  const item = {
    store: x
  };
  localStorage.setItem(item);
};
export const MC = (x) => {
  localStorage.clear();
};
