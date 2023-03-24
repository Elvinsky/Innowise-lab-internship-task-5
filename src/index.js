/* eslint-disable no-unused-vars */
import { valuesArr, actionsInd } from './consts.js';
import { setHandler } from './handler.js';
import Calculator from './calculator.js';
import * as consts from './consts.js';
import * as commands from './commands.js';
const buttonEl = document.createElement('button');
const gridContainer = document.getElementById('grid-container');
const renderContainer = (size) => {
  for (let i = 0; i < size; i++) {
    const buttonCopy = buttonEl.cloneNode(true);
    buttonCopy.innerHTML = valuesArr[i];
    buttonCopy.id = valuesArr[i];
    buttonCopy.classList.add('grid-btn');
    if (actionsInd.includes(i))buttonCopy.classList.add('actions');
    if (i === 28) {
      buttonCopy.disabled = true;
      buttonCopy.innerHTML = 'Innowise Lab Task 4';
      gridContainer.append(buttonCopy);
    }
    buttonCopy.addEventListener('click', () => {
      buttonCopy.classList.add('clicked');
      setTimeout(() => {
        buttonCopy.classList.remove('clicked');
      }, 200);
    });
    gridContainer.append(buttonCopy);
  }
};
setHandler();
renderContainer(32);