'use strict';
let mass = ['Григорий Кудрявцев','Евгений Алексеев','Антон Мясников','Алексей Князев','Владислав Иванов'];
let list = $('#list');
let listview = '';
const button = $("#add");
const text_add = document.querySelector("#text_add");

$.each(mass, function (key, value) {
    list.append(`<li id="button_li"><h1 id="button_h1">${value}</h1></li>`);
});
$(button).on('click',text_add,function () {
    list.append(`<li id="button_li"><h1 id="button_h1">${text_add.value}</h1>`).listview('refresh');
    text_add.value = '';
});
