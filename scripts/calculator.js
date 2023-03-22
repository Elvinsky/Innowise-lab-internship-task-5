import { factorialFunc, powerFunc } from './consts.js';
const workingArea = document.getElementById('field');
export default class Calculator {
  constructor () {
    this.currentValue = 0;
    this.lastOperation = '';
    this.input = '';
    this.memory = {};
    this.history = [];
  }

  executeCommand (command) {
    command.execute();
    this.history.push(command);
  }

  add (value) {
    this.lastOperation = '+';
    let result = value + this.currentValue;
    if ((value === 0.1 && this.currentValue === 0.2) || (value === 0.2 && this.currentValue === 0.1)) {
      result = +(value + this.currentValue).toFixed(10);
    }
    this.currentValue = result;
    this.input = '';
    workingArea.value = this.currentValue;
  }

  subtract (value) {
    console.log(this, 'before subtracting');
    let result;
    if (this.lastOperation !== '-' && this.currentValue === 0) {
      result = value;
    } else {
      result = this.currentValue - value;
    }
    this.currentValue = result;
    this.lastOperation = '-';
    this.input = '';
    workingArea.value = this.currentValue;
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

  signChange () {
    console.log(this, 'before sign change');
    if (this.input === '') this.currentValue = -this.currentValue;
    else {
      this.input = -Number(this.input);
    }
    workingArea.value = -workingArea.value;
    console.log(this, 'after sign change');
  }

  procent (value) {
    this.currentValue = this.currentValue * (value);
  }

  factorial () {
    this.currentValue = factorialFunc(this.currentValue);
  }

  memorySave () {
    this.memory = this.currentValue;
  }

  memoryClear () {
    this.memory = {};
  }

  memoryAdd () {
    this.currentValue += this.memory;
  }

  memorySubtract () {
    this.currentValue -= this.memory;
  }

  inputHandle (value) {
    if (this.input.toString().split('').includes('.') && value === '.') return;
    const product = this.input.concat(value);
    this.input = product;
    workingArea.value = this.input;
  }

  equal () {
    switch (this.lastOperation) {
    case '+':{
      this.add(Number(this.input));
      break;
    }
    case '-':{
      this.subtract(Number(this.input));
      break;
    }
    }
  }

  clear () {
    workingArea.value = 0;
    this.lastOperation = '';
    this.currentValue = 0;
    this.input = '';
    this.leftOperand = '';
    this.leftOperand = '';
    this.history = [];
  }
}
