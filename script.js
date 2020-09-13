function changeSelectedColor(selectedColor) {
  document.querySelectorAll('.color').forEach(color => {
    if (color === selectedColor) {
      color.classList.add('selected');
    } else if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
  });
}

function initializeFunctions() {
    document.querySelectorAll('.color').forEach(color => {
      color.addEventListener('click', () => changeSelectedColor(color))
    })
}

document.body.onload = function () {
    initializeFunctions();
};