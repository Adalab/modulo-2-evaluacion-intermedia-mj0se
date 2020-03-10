'use strict';

let butTest = document.querySelector('.js-btn-test');
let randomNumber = getRandomNumber(100);
let textAdd = document.querySelector('.js-text');
let numberValue = document.querySelector('.js-btn-number');
const btnReset = document.querySelector('.js-btn-reset');
const accountant = document.querySelector('.js-text-try');

// número random
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
}

butTest.addEventListener('click', checkNumber);


console.log('me han probado', randomNumber);


// condicional numero +100-1


function checkNumber() {
    const userNumber = parseInt(numberValue.value);
    if (userNumber > 100) {
        return textAdd.innerHTML = '¡El número es demasiado alto, debe de estar entre 1 y 100!.';
    } else if (userNumber < 1) {
        return textAdd.innerHTML = '¡El número es demasiado bajo, debe de estar entre 1 y 100!.';
    } else if (userNumber === randomNumber) {
        return textAdd.innerHTML = '¡¡¡Has acertado, eres una campeona!!!'
    } else if (userNumber > randomNumber) {
        return textAdd.innerHTML = 'Demasiado alto, sigue probando.'
    } else if (userNumber < randomNumber) {
        return textAdd.innerHTML = 'Demasiado bajo, sigue probando.'
    } else {
        return textAdd.innerHTML = 'El número debe de estar entre 0 y 100, inténtalo otra vez'
    }
}

// funcion contador 
var count_click = 0;

function count_click_add() {

    count_click += 1;
    accountant.innerHTML = 'Número de intentos: ';
}

accountant.addEventListener('click', count_click_add);