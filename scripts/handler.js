import Calculator from './calculator.js';
import { AddCommand, ClearCommand, EqualCommand, InputCommand, SubtractCommand } from './commands.js';

const field = document.getElementById('grid-container');
// const workingArea = document.getElementById('field');
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
  case '+':{
    const addCommand = new AddCommand(calculator, +calculator.input);
    calculator.executeCommand(addCommand);
    break;
  }
  case '=':{
    const equalCommand = new EqualCommand(calculator);
    calculator.executeCommand(equalCommand);
    break;
  }
  case '-':{
    const subCommand = new SubtractCommand(calculator, +calculator.input);
    calculator.executeCommand(subCommand);
    break;
  }
  case 'C':{
    const clearCommand = new ClearCommand(calculator);
    calculator.executeCommand(clearCommand);
    break;
  }
  }
});
