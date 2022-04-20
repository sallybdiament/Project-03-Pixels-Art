const pixelBoard = document.getElementById('pixel-board');

function criaTabela () {
  for (let index = 1; index < 6; index += 1) {
    const divLinhas = document.createElement('div');
    divLinhas.className = 'divLinhas';
    pixelBoard.appendChild(divLinhas);
    for (let i = 1; i < 6; i += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLinhas.appendChild(divPixel);
    }
  }
}

criaTabela();