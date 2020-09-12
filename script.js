const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const color3 = document.querySelector('#color-3');
const color4 = document.querySelector('#color-4');
const colorPalette = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const btnVqv = document.querySelector('#generate-board');
const inputBoardSize = document.querySelector('#board-size');
const tableElement = document.querySelector('#pixel-board');

let selectedColor = 'black';

function colorGeneration() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function removeSelectedClass(stringClass) {
  const classArray = stringClass.split(' ');
  classArray.splice(2, 1);
  return classArray.join(' ');
}

function createTable(nValue) {
  tableElement.removeChild(tableElement.children[0]);
  const tableBody = document.createElement('tbody');
  tableElement.appendChild(tableBody);
  console.log(tableElement);
  for (let i = 0; i < nValue; i += 1) {
    const tableRow = document.createElement('tr');
    tableRow.className = ('pixel-line');
    for (let j = 0; j < nValue; j += 1) {
      const tableCell = document.createElement('td');
      tableCell.className = 'pixel';
      tableCell.style.backgroundColor = 'white';
      tableRow.appendChild(tableCell);
    }
    tableBody.appendChild(tableRow);
  }
  return tableElement;
}

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = colorGeneration();
color3.style.backgroundColor = colorGeneration();
color4.style.backgroundColor = colorGeneration();

colorPalette.addEventListener('click', function (event) {
  if (event.target.className.includes('color')) {
    const oldSelectedElement = document.querySelector('.selected');
    const oldClassName = removeSelectedClass(oldSelectedElement.className);
    oldSelectedElement.className = oldClassName;
    event.target.className += ' selected';
    selectedColor = event.target.style.backgroundColor;
  }
});

tableElement.addEventListener('click', function (elementEvent) {
  if (elementEvent.target.className === 'pixel') {
    elementEvent.target.style.backgroundColor = selectedColor;
  }
});

btnClear.addEventListener('click', function () {
  const pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
});

inputBoardSize.addEventListener('keyup', function () {
  if (inputBoardSize.value <= 4) {
    inputBoardSize.value = 5;
  } else if (inputBoardSize.value >= 51) {
    inputBoardSize.value = 50;
  }
});

btnVqv.addEventListener('click', function () {
  let valueBoardSize = inputBoardSize.value;
  if (valueBoardSize === '') {
    alert('Board inválido!');
  } else if (valueBoardSize <= 4) {
    valueBoardSize = 5;
  } else if (valueBoardSize >= 51) {
    valueBoardSize = 50;
  }
  createTable(valueBoardSize);
});
