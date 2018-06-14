"use strict";
let mass = ['Rainbow Six Siege','Borderlands','God of war','Heartstone', 'Человек-паук'];
let list = $('#list');


$.each(mass, function (key, value) {
    list.append('<li>' + value + '</li>');
})
