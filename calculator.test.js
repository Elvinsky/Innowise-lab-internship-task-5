/* eslint-disable no-undef */
import Calculator from './src/calculator';

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
      calculator.multiply(3);
      expect(calculator.currentValue).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
      calculator.multiply(-2);
      calculator.multiply(3);
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
      calculator.divide(6);
      calculator.divide(3);
      expect(calculator.currentValue).toBe(2);
    });

    test('divides a positive and a negative number', () => {
      calculator.divide(-6);
      calculator.divide(3);
      expect(calculator.currentValue).toBe(-2);
    });

    test('divides by 0', () => {
      expect(() => calculator.divide(0)).toThrow('Dividing on 0 is forbidden. Risk of universe breakage');
      expect(calculator.currentValue).toBe(0);
    });
  });
});
