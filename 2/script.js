"use strict";


let hello = 'Привет, Мир';
const word = document.querySelector('#hello');
const ok = document.querySelector('#ok');
const color = document.querySelector('#color');
const text = document.querySelector('#text');
const size_switch = document.querySelector('#size_switch');
const size = document.querySelector('#size');


ok.onclick = function () {
    word.innerText = hello;
};
color.onclick = function () {
    word.style.color = text.value;
    text.value = '';
};
size_switch.onclick = function () {
    word.style.fontSize = size.value + "px";
    size.value = '';
};
