/* eslint-disable no-unused-vars */
// Define the Command interface
class Command {
  execute () {}
}

// Define the concrete command classes for each operation
class AddCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.add(this.value);
  }
}

class SubtractCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.subtract(this.value);
  }
}

class MultiplyCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.multiply(this.value);
  }
}

class DivideCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.divide(this.value);
  }
}
class PowerCommand extends Command {
  constructor (calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute () {
    this.calculator.power(this.value);
  }
}
class FactorialCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.factorial();
  }
}
class MemorySaveCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memorySave();
  }
}
class MemoryClearCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memoryClear();
  }
}
class MemoryAddCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memoryAdd();
  }
}
class MemorySubtractCommand extends Command {
  constructor (calculator) {
    super();
    this.calculator = calculator;
  }

  execute () {
    this.calculator.memorySubtract();
  }
}

// Define the Calculator class that will execute the commands
