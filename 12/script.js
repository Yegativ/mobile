'use strict';
let list = $('#list');
let listview = '';
var mass;
$.ajax({
    url: 'http://localhost:8081/heroes',
    method: 'POST',
    success: function (answer) {
        console.log(answer);
        $.each(answer, function (key, value) {
            console.log(list);
            list.append(`<li><h1>${value}</h1></li>`);
        });
    },
    error: function (err) {
        console.warn(err);
    }
});

