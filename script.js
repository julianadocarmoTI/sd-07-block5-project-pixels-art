function quadroPixels() {
  for (let i = 0; i < 25; i += 1) {
    const quadro = document.getElementById('pixel-board');
    const divQuadro = document.createElement('div');
    divQuadro.className = 'pixel';
    quadro.appendChild(divQuadro);
  }
}

quadroPixels();
