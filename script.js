const data = {
  colors: ['black'],
  selectedColor: 0,
};

function changeSelectedColor(selectedColor) {
  data.selectedColor = parseInt(selectedColor.id);
  document.querySelectorAll('.color').forEach((color) => {
    if (color === selectedColor) {
      color.classList.add('selected');
    } else if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
  });
}

function changePixelColor(selectedPixel) {
  selectedPixel.style.backgroundColor = data.colors[data.selectedColor];
}

function clearBoard() {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
}

function createRandomColor() {
  const number = () => Math.floor(Math.random() * 256);
  return `rgb(${number()}, ${number()}, ${number()})`;
}

function initializeColors() {
  for (let index = 1; index <= 3; index += 1) {
    data.colors.push(createRandomColor());
  }
  const colors = document.querySelectorAll('.color');
  for (let index = 0; index < data.colors.length; index += 1) {
    colors[index].style.backgroundColor = data.colors[index];
  }
}

function initializeFunctions() {
  initializeColors();
  document.querySelector('#clear-board').addEventListener('click', clearBoard);
  document.querySelectorAll('.color').forEach((color) => {
    color.addEventListener('click', () => changeSelectedColor(color));
  });
  document.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.addEventListener('click', () => changePixelColor(pixel));
  });
}

document.body.onload = function () {
  initializeFunctions();
};
