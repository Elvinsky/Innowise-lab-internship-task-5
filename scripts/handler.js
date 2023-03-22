import Calculator from './calculator.js';
import { AddCommand, ClearCommand, EqualCommand, InputCommand, MultiplyCommand, SignChangeCommand, SubtractCommand } from './commands.js';

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
  case 'C':{
    const clearCommand = new ClearCommand(calculator);
    calculator.executeCommand(clearCommand);
    break;
  }
  }
});
