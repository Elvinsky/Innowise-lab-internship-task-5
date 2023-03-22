import Calculator from './calculator.js';
import { AddCommand, ClearCommand, DivideCommand, EqualCommand, FactorialCommand, InputCommand, MemoryAddCommand, MemoryClearCommand, MemorySaveCommand, MemorySubtractCommand, MultiplyCommand, PowerCommand, ProcentCommand, RootCommand, SignChangeCommand, SubtractCommand } from './commands.js';
const field = document.getElementById('grid-container');
const calculator = new Calculator();
field.addEventListener('click', (event) => {
  const id = event.target.id;
  switch (id) {
  case '1': case '2': case '3' :
  case '4' : case '5': case '6' :
  case '7' :case '8' :case '9' :
  case '0' : case '.':{
    const inputCommand = new InputCommand(calculator, id);
    calculator.executeCommand(inputCommand);
    break;
  };
  case '+/-':{
    const signChange = new SignChangeCommand(calculator);
    calculator.executeCommand(signChange);
    break;
  }
  case '+':{
    const addCommand = new AddCommand(calculator, Number(calculator.input));
    calculator.executeCommand(addCommand);
    break;
  }
  case '=':{
    const equalCommand = new EqualCommand(calculator);
    calculator.executeCommand(equalCommand);
    break;
  }
  case '-':{
    const subCommand = new SubtractCommand(calculator, Number(calculator.input));
    calculator.executeCommand(subCommand);
    break;
  }
  case 'X':{
    const multiplyCommand = new MultiplyCommand(calculator, Number(calculator.input));
    calculator.executeCommand(multiplyCommand);
    break;
  }
  case '/':{
    const divideCommand = new DivideCommand(calculator, Number(calculator.input));
    calculator.executeCommand(divideCommand);
    break;
  }
  case '%':{
    const procentCommand = new ProcentCommand(calculator, Number(calculator.input));
    calculator.executeCommand(procentCommand);
    break;
  }
  case 'C':{
    const clearCommand = new ClearCommand(calculator);
    calculator.executeCommand(clearCommand);
    break;
  }
  case 'x^2':{
    const powerCommand = new PowerCommand(calculator, 2);
    calculator.executeCommand(powerCommand);
    break;
  }
  case 'x^3':{
    const powerCommand = new PowerCommand(calculator, 3);
    calculator.executeCommand(powerCommand);
    break;
  }
  case 'x^y':{
    const powerCommand = new PowerCommand(calculator, Number(calculator.input), true);
    calculator.executeCommand(powerCommand);
    break;
  }
  case '1/x':{
    const powerCommand = new PowerCommand(calculator, -1);
    calculator.executeCommand(powerCommand);
    break;
  }
  case 'x^-2':{
    const rootCommand = new RootCommand(calculator, 2);
    calculator.executeCommand(rootCommand);
    break;
  }
  case 'x^-3':{
    const rootCommand = new RootCommand(calculator, 3);
    calculator.executeCommand(rootCommand);
    break;
  }
  case 'x^-y':{
    const rootCommand = new RootCommand(calculator, Number(calculator.input), true);
    calculator.executeCommand(rootCommand);
    break;
  }
  case 'x!':{
    const factorialCommand = new FactorialCommand(calculator);
    calculator.executeCommand(factorialCommand);
    break;
  }
  case 'MC':{
    const memoryClearCommand = new MemoryClearCommand(calculator);
    calculator.executeCommand(memoryClearCommand);
    break;
  }
  case 'M+':{
    const memoryAddCommand = new MemoryAddCommand(calculator);
    calculator.executeCommand(memoryAddCommand);
    break;
  }
  case 'M-':{
    const memorySubtractCommand = new MemorySubtractCommand(calculator);
    calculator.executeCommand(memorySubtractCommand);
    break;
  }
  case 'MS':{
    const memorySaveCommand = new MemorySaveCommand(calculator);
    calculator.executeCommand(memorySaveCommand);
    break;
  }
  }
});
