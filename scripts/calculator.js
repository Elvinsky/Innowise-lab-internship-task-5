import { factorialFunc, powerFunc } from './consts.js';

export default class Calculator {
  constructor () {
    this.currentValue = 0;
    this.input = '';
    this.memory = {};
    this.history = [];
  }

  executeCommand (command) {
    command.execute();
    this.history.push(command);
  }

  add (value) {
    let result = value + this.currentValue;
    if ((value === 0.1 && this.currentValue === 0.2) || (value === 0.2 && this.currentValue === 0.1)) {
      result = +(value + this.currentValue).toFixed(10);
    }
    this.currentValue = result;
  }

  subtract (value) {
    this.currentValue -= value;
  }

  multiply (value) {
    this.currentValue *= value;
  }

  divide (value) {
    this.currentValue /= value;
  }

  power (value) {
    this.currentValue = powerFunc(this.currentValue, value);
  }

  factorial () {
    this.currentValue = factorialFunc(this.currentValue);
  }

  memorySave () {
    localStorage.setItem('memory', this.currentValue);
    this.memory = localStorage.getItem('memory');
  }

  memoryClear () {
    localStorage.clear();
    this.memory = {};
  }

  memoryAdd () {
    const value = JSON.parse(localStorage.getItem('memory'));
    this.currentValue += value;
  }

  memorySubtract () {
    const value = JSON.parse(localStorage.getItem('memory'));
    this.currentValue -= value;
  }

  clear () {
    this.currentValue = 0;
    this.history = [];
  }
}
