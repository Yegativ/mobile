"use strict";


let hello = 'Привет, Мир';
const word = document.querySelector('#hello');
const ok = document.querySelector('#ok');

ok.onclick = function () {
  if (word.innerText !== hello) {
      word.innerText = hello;
  }
  else{
    word.innerHTML = '<br>';
  }
};