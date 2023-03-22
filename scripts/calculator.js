import { factorialFunc, powerFunc, rootFunc } from './consts.js';
const workingArea = document.getElementById('field');

export default class Calculator {
  constructor () {
    this.currentValue = 0;
    this.lastOperation = '';
    this.input = '';
    this.memory = 0;
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
    let result;
    if (this.lastOperation !== '-' && this.currentValue === 0) {
      result = value;
    } else {
      result = this.currentValue - value;
    }
    this.currentValue = result;
    this.lastOperation = '-';
    this.input = '';
    workingArea.value = this.currentValue; console.log(this);
  }

  multiply (value) {
    if (this.currentValue === 0) this.currentValue = value;
    else if (this.input !== '') this.currentValue *= value;
    this.input = '';
    workingArea.value = this.currentValue;
    this.lastOperation = '*';
  }

  divide (value) {
    if (this.currentValue === 0) this.currentValue = value;
    else if (this.input !== '' && value !== 0) this.currentValue /= value;
    else if (this.input !== '' && value === 0) {
      alert('Dividing on 0 is forbidden. Risk of universe breakage');
      return;
    }
    this.input = '';
    workingArea.value = this.currentValue;
    this.lastOperation = '/';
  }

  power (value, flag = false) { // flag detects if power method is used for x^y situation (true) or not (false)
    if (!flag) {
      if (this.currentValue === 0) this.currentValue = this.input;
      else if (this.input !== '') powerFunc(this.currentValue, value);
      this.currentValue = powerFunc(this.currentValue, value);
      workingArea.value = this.currentValue;
      this.input = '';
    } else {
      if (this.currentValue === 0) this.currentValue = value;
      else if (this.input !== '') this.currentValue = powerFunc(this.currentValue, value);
      this.input = '';
      workingArea.value = this.currentValue;
      this.lastOperation = '^';
    }
  }

  root (value, flag = false) {
    if (!flag) {
      if (this.currentValue === 0) this.currentValue = this.input;
      else if (this.input !== '') rootFunc(this.currentValue, value);
      this.currentValue = rootFunc(this.currentValue, value);
      workingArea.value = this.currentValue;
      this.input = '';
    } else {
      if (this.currentValue === 0) this.currentValue = value;
      else if (this.input !== '') this.currentValue = rootFunc(this.currentValue, value);
      this.input = '';
      workingArea.value = this.currentValue;
      this.lastOperation = 'root';
    }
  }

  signChange () {
    if (this.input === '') this.currentValue = -this.currentValue;
    else {
      this.input = -Number(this.input);
    }
    workingArea.value = -workingArea.value;
  }

  procent (value) {
    if (this.currentValue === 0) this.currentValue = value;
    else if (this.input !== '') this.currentValue *= value / 100;
    this.input = '';
    workingArea.value = this.currentValue;
    this.lastOperation = '%';
  }

  factorial () {
    if (this.currentValue === 0) this.currentValue = this.input;
    else if (this.input !== '') factorialFunc(this.currentValue);
    this.currentValue = factorialFunc(this.currentValue);
    workingArea.value = this.currentValue;
    this.input = '';
  }

  memorySave () {
    this.memory = this.currentValue;
    console.log(this);
  }

  memoryClear () {
    this.memory = 0;
    console.log(this);
  }

  memoryAdd () {
    this.currentValue += this.memory;
    workingArea.value = this.currentValue;
    this.input = '';
    console.log(this);
  }

  memorySubtract () {
    this.currentValue -= this.memory;
    workingArea.value = this.currentValue;
    this.input = '';
    console.log(this);
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
    case '*':{
      this.multiply(Number(this.input));
      break;
    }
    case '/':{
      this.divide(Number(this.input));
      break;
    }
    case '%':{
      this.procent(Number(this.input));
      break;
    }
    case '^':{
      this.power(Number(this.input), true);
      break;
    }

    case 'root':{
      this.root(Number(this.input), true);
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
