"use strict";
let mass = ['Описание игры','Разрушение как инструмент','постоянное развитие','Бой в ограниченом пространстве', 'Последнее обновление'];
let list = $('#list');
const button = document.querySelector("#button");

$.each(mass, function (key, value) {
    list.append(`<li id="button_li"><a href="#page${key}" class="ui-btn"><h1 id="button_h1">${value}</h1></a></li>`);
});
