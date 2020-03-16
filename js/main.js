'use strict';

let butTest = document.querySelector('.js-btn-test');
let randomNumber = getRandomNumber(100);
let textAdd = document.querySelector('.js-text');
let numberValue = document.querySelector('.js-btn-number');
const accountant = document.querySelector('.js-text-try');
let paintOnHtml = '';

// número random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log('me han probado', randomNumber);
// funcion para añadir texto

function getHtml(textOnHtml) {
  textAdd.innerHTML = textOnHtml;
}

// condicional numero +100-1

function checkNumber(event) {
  event.preventDefault();
  const userNumber = parseInt(numberValue.value);
  if (isNaN(userNumber) || userNumber > 100 || userNumber < 1) {
    paintOnHtml = '¡El número debe de estar entre 1 y 100!.';
  } else if (userNumber === randomNumber) {
    paintOnHtml = '¡¡¡Has acertado, eres una campeona!!!';
  } else if (userNumber > randomNumber) {
    paintOnHtml = 'Demasiado alto, sigue probando.';
  } else if (userNumber < randomNumber) {
    paintOnHtml = 'Demasiado bajo, sigue probando.';
  }
  getHtml(paintOnHtml);
}
butTest.addEventListener('click', checkNumber);
var count_click = 0;

function count_click_add() {
  count_click += 1;
  accountant.innerHTML = 'Número de intentos: ' + count_click;
}
butTest.addEventListener('click', count_click_add);
