const pixelBoard = document.getElementById('pixel-board');
let numberOfPixels = 5;

function criaTabela() {
  for (let index = 1; index <= numberOfPixels; index += 1) {
    const divLinhas = document.createElement('div');
    divLinhas.className = 'divLinhas';
    pixelBoard.appendChild(divLinhas);
    for (let i = 1; i <= numberOfPixels; i += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLinhas.appendChild(divPixel);
    }
  }
}

// let inputBoardSize;

let generateBoard;
let divFilhas = document.querySelectorAll('.pixel');

criaTabela();
// function definingBoardSize() {
  const inputBoardSize = document.getElementById('board-size');
  generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', function () {
   apagar();
    numberOfPixels = parseInt(inputBoardSize.value);
    if (inputBoardSize.value === '') {
      alert('Board inválido!');
    }
    else if (parseInt(inputBoardSize.value) < 5){
      numberOfPixels = 5;
      criaTabela();
    }
    else if (parseInt(inputBoardSize.value) > 50){
      numberOfPixels = 50;
      criaTabela();
    }
    else criaTabela();
  });
// }
// definingBoardSize();


function apagar(){
  let classePixel = document.getElementsByClassName('pixel');
  for (let i = classePixel.length -1 ; i >=0 ; i --){
    classePixel[i].remove();
  }
  let classeDivLinhas = document.getElementsByClassName('divLinhas');
  for (let i = classeDivLinhas.length -1 ; i >=0 ; i --){
    classeDivLinhas[i].remove();
  }
}



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