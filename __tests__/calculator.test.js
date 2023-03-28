/* eslint-disable no-undef */
import Calculator from '../src/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      calculator.currentValue = 2;
      calculator.add(3);
      expect(calculator.currentValue).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      calculator.add(-2);
      calculator.add(3);
      expect(calculator.currentValue).toBe(1);
    });

    test('adds two floating point numbers', () => {
      calculator.add(0.1);
      calculator.add(0.2);
      expect(calculator.currentValue).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      calculator.subtract(3);
      calculator.subtract(2);
      expect(calculator.currentValue).toBe(1);
    });

    test('subtracts a positive and a negative number', () => {
      calculator.currentValue = -2;
      calculator.subtract(3);
      expect(calculator.currentValue).toBe(-5);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      calculator.currentValue = 2;
      calculator.input = 3;
      calculator.lastOperation = '*';
      calculator.equal();
      expect(calculator.currentValue).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
      calculator.currentValue = 2;
      calculator.input = -3;
      calculator.lastOperation = '*';
      calculator.equal();
      expect(calculator.currentValue).toBe(-6);
    });

    test('multiplies by 0', () => {
      calculator.multiply(0);
      expect(calculator.currentValue).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      calculator.currentValue = 6;
      calculator.input = 3;
      calculator.lastOperation = '/';
      calculator.equal();
      expect(calculator.currentValue).toBe(2);
    });

    test('divides a positive and a negative number', () => {
      calculator.currentValue = -6;
      calculator.input = 3;
      calculator.lastOperation = '/';
      calculator.equal();
      expect(calculator.currentValue).toBe(-2);
    });

    test('divides by 0', () => {
      expect(() => {
        calculator.currentValue = 1;
        calculator.input = 0;
        calculator.lastOperation = '/';
        calculator.equal();
      }).toThrow('Dividing on 0 is forbidden. Risk of universe breakage');
      expect(calculator.currentValue).toBe(1);
    });
  });

  describe('procent', () => {
    test('0-100 procents of a number', () => {
      calculator.currentValue = 100;
      calculator.input = 30;
      calculator.lastOperation = '%';
      calculator.equal();
      expect(calculator.currentValue).toBe(30);
    });
    test('100-inf procents of a number', () => {
      calculator.currentValue = 100;
      calculator.input = 200;
      calculator.lastOperation = '%';
      calculator.equal();
      expect(calculator.currentValue).toBe(200);
    });
  });
  describe('sign change', () => {
    test('input is empty', () => {
      calculator.input = '';
      calculator.currentValue = 10;
      calculator.signChange();
      expect(calculator.currentValue).toBe(-10);
    });
    test('input is NOT empty', () => {
      calculator.input = '10';
      calculator.signChange();
      expect(calculator.input).toBe(-10);
    });
  });
  describe('power', () => {
    test('positive power', () => {
      calculator.currentValue = 2;
      calculator.input = 3;
      calculator.lastOperation = '^';
      calculator.equal();
      expect(calculator.currentValue).toBe(8);
    });
    test('negative power', () => {
      calculator.currentValue = 2;
      calculator.input = -2;
      calculator.lastOperation = '^';
      calculator.equal();
      expect(calculator.currentValue).toBe(0.25);
    });
    test('Non integer power', () => {
      expect(() => {
        calculator.currentValue = 10;
        calculator.input = 0.3;
        calculator.lastOperation = '^';
        calculator.equal();
      }).toThrow(
        'Unexpected value. If u want to find a root - use root button'
      );
      expect(calculator.currentValue).toBe(10);
    });
  });
  describe('root', () => {
    test('positive root', () => {
      calculator.currentValue = 4;
      calculator.input = 2;
      calculator.lastOperation = 'root';
      calculator.equal();
      expect(calculator.currentValue).toBe(2);
    });
    test('Negative root', () => {
      expect(() => {
        calculator.currentValue = 10;
        calculator.input = -2;
        calculator.lastOperation = 'root';
        calculator.equal();
      }).toThrow('Unexpected value. Only poisitive integers allowed');
      expect(calculator.currentValue).toBe(10);
    });
    test('Non integer root', () => {
      expect(() => {
        calculator.currentValue = 10;
        calculator.input = 2.1;
        calculator.lastOperation = 'root';
        calculator.equal();
      }).toThrow('Unexpected value. Only poisitive integers allowed');
      expect(calculator.currentValue).toBe(10);
    });
  });
  test('factorial', () => {
    calculator.currentValue = 3;
    calculator.factorial();
    expect(calculator.currentValue).toBe(6);
  });
});
