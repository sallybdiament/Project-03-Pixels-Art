const pixelBoard = document.getElementById('pixel-board');

function criaTabela() {
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

const primeiraCor = document.getElementsByClassName('color')[0];
primeiraCor.classList += ' selected';
// console.log(primeiraCor);

const selectedElement = document.querySelector('.selected');
// console.log(selectedElement);

const firstLi = document.getElementsByClassName('color')[0];
const secondLi = document.getElementsByClassName('color')[1];
const thirdLi = document.getElementsByClassName('color')[2];
const fourthLi = document.getElementsByClassName('color')[3];

let colorToFill = 'black';

window.onload = function (){

firstLi.addEventListener('click', function () {
  secondLi.classList.remove('selected');
  thirdLi.classList.remove('selected');
  fourthLi.classList.remove('selected');
  firstLi.classList.add('selected');
  colorToFill = 'black';
});

secondLi.addEventListener('click', function () {
  secondLi.classList.add('selected');
  firstLi.classList.remove('selected');
  thirdLi.classList.remove('selected');
  fourthLi.classList.remove('selected');
  colorToFill = 'blue';
});

thirdLi.addEventListener('click', function () {
  firstLi.classList.remove('selected');
  secondLi.classList.remove('selected');
  fourthLi.classList.remove('selected');
  thirdLi.classList.add('selected');
  colorToFill = 'purple';
});
fourthLi.addEventListener('click', function () {
  firstLi.classList.remove('selected');
  secondLi.classList.remove('selected');
  thirdLi.classList.remove('selected');
  fourthLi.classList.add('selected');
  colorToFill = 'red';
  console.log(colorToFill);
});

const botaoLimpar = document.getElementById('clear-board');
console.log(botaoLimpar);
const selectAllPixels = document.querySelectorAll('div.pixel');

botaoLimpar.addEventListener('click', function () {
  for (let index = 0; index < 25; index += 1) {
    selectAllPixels[index].style.backgroundColor = 'white';
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = colorToFill;
    // event.target.classList.contains('pixel').style.backgroundColor = 'black';
  }
}, false);

}