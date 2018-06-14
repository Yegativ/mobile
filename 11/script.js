'use strict';
let list = $('#list');
let listview = '';
$.ajax({
    url: 'http://localhost:8081/heroes',
    method: 'POST',
    success: function (answer) {
        list.append(`<li><h1>${answer}</h1></li>`)
    },
    error: function (err) {
        console.warn(err);
    }
});