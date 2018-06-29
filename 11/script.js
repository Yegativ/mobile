'use strict';
let list = $('#list');
let listview = '';
let mass;
$.ajax({
    url: 'http://localhost:8081/heroes',
    method: 'POST',
    success: function (answer) {
        console.log(answer);
        mass = answer;
    },
    error: function (err) {
        console.warn(err);
    }
});
$.each(mass, function (key, value) {
    list.append(`<li><h1>${value}</h1></li>`);
});