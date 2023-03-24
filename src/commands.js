/* eslint-disable no-unused-vars */

// Define the Command interface
export class Command {
  execute () {}
}

// Define the concrete command export classes for each operation
export class AddCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.add(this.value);
  }
}

export class SubtractCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.subtract(this.value);
  }
}

export class MultiplyCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.multiply(this.value);
  }
}

export class DivideCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.divide(this.value);
  }
}
export class PowerCommand extends Command {
  constructor (calculator, value, flag = false) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.flag = flag;
  }

  execute () {
    this.calculator.power(this.value, this.flag);
  }
}
export class RootCommand extends Command {
  constructor (calculator, value, flag = false) {
    super();
    if (value <= 0) {
      alert('Error! Cant count root of negative power');
      return;
    }
    this.calculator = calculator;
    this.value = value;
    this.flag = flag;
  }

  execute () {
    this.calculator.root(this.value, this.flag);
  }
}
export class SignChangeCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.signChange();
  }
}
export class ProcentCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.procent(this.value);
  }
}
export class FactorialCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.factorial();
  }
}
export class MemorySaveCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memorySave();
  }
}
export class MemoryClearCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memoryClear();
  }
}
export class MemoryAddCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memoryAdd();
  }
}
export class MemorySubtractCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memorySubtract();
  }
}
export class InputCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.inputHandle(this.value);
  }
}
export class EqualCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.equal();
  }
}
export class ClearCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.clear();
  }
}

// Define the Calculator export class that will execute the commands
