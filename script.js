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

const primeiraCor = document.getElementsByClassName('color')[0];
primeiraCor.classList += ' selected';
// console.log(primeiraCor);

const selectedElement = document.querySelector('.selected');
// console.log(selectedElement);

const firstLi = document.getElementsByClassName('color')[0];
const secondLi = document.getElementsByClassName('color')[1];
const thirdLi = document.getElementsByClassName('color')[2];
const fourthLi = document.getElementsByClassName('color')[3];

window.onload = function () {
  firstLi.addEventListener('click', function () {
  secondLi.classList.remove('selected');
  thirdLi.classList.remove('selected');
  fourthLi.classList.remove('selected');
  firstLi.classList.add('selected');
  });

  secondLi.addEventListener('click', function (){
secondLi.classList.add('selected');
firstLi.classList.remove('selected');
thirdLi.classList.remove('selected');
fourthLi.classList.remove('selected');
  })

  thirdLi.addEventListener('click', function () {
    firstLi.classList.remove('selected');
    secondLi.classList.remove('selected');
    fourthLi.classList.remove('selected');
    thirdLi.classList.add('selected');
    });
    fourthLi.addEventListener('click', function () {
        firstLi.classList.remove('selected');
        secondLi.classList.remove('selected');
        thirdLi.classList.remove('selected');
        fourthLi.classList.add('selected');
        });
}

const botaoLimpar = document.getElementById('clear-board');
console.log(botaoLimpar);
const selectAllPixels = document.querySelectorAll('div.pixel');

botaoLimpar.addEventListener('click', function(){
for (i = 0 ; i < 25 ; i +=1){
selectAllPixels[i].style.backgroundColor = "white";
}
});

//   function handleChangeSelected(event) {
//     selectedElement.classList.remove('selected');
//     event.target.classList.add('selected');
    
// }
//   firstLi.addEventListener('click', handleChangeSelected(event));
//   secondLi.addEventListener('click', handleChangeSelected(event));
//   thirdLi.addEventListener('click', handleChangeSelected(event));
//   fourthLi.addEventListener('click', handleChangeSelected(event));
// }

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel') ) {
    console.log(event.target.classList.contains('pixel'));
    // document.body.style.backgroundColor = "red";
    // event.target.classList.contains('pixel').style.backgroundColor = 'black';
  }
}, false);
