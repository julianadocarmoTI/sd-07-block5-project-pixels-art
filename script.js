const data = {
  colors: [
    'black',
    'rgb(223, 41, 53)',
    'rgb(255, 174, 3)',
    'rgb(15, 163, 177)',
  ],
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

function initializeFunctions() {
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
