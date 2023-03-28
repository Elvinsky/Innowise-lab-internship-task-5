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
    if (consts.primaryInd.includes(i))buttonCopy.classList.add('primary');
    if (i === 28) {
      buttonCopy.innerHTML = 'Change Theme';
      buttonCopy.addEventListener('click', () => {
        themeChanger();
      });
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
const themeChanger = () => {
  const nodes = [
    document.getElementById('working-field'),
    document.getElementById('grid-container'),
    document.getElementById('field')
  ];
  const buttons = document.querySelectorAll('.grid-btn ');
  buttons.forEach(el => {
    nodes.push(el);
  });
  nodes.forEach(el => {
    el.classList.toggle('white');
  });
};
setHandler();
renderContainer(32);
