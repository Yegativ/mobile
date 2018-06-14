'use strict';
const theme = document.querySelector("#theme");
const gray = document.querySelector("#gray");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const purple = document.querySelector("#purple");
const normal = document.querySelector("#normal");
const gray_text = document.querySelector("#gray_text");
const green_text = document.querySelector("#green_text");
const normal_text = document.querySelector("#normal_text");
$(document).on('change', '#theme', function () {
    $('#main').toggleClass('ui-body-b', 'ui-body-a');

});
$('#save').click(function () {
    $('#theme').flipswitch('disable');
    $('#gray').checkboxradio('disable');
    $('#blue').checkboxradio('disable');
    $('#green').checkboxradio('disable');
    $('#purple').checkboxradio('disable');
    $('#normal').checkboxradio('disable');
    $('#gray_text').checkboxradio('disable');
    $('#green_text').checkboxradio('disable');
    $('#normal_text').checkboxradio('disable');

});
$(document).on('change', '#gray', function () {
    $('#main').css('background', 'gray')
});
$(document).on('change', '#blue', function () {
    $('#main').css('background', 'blue')
});
$(document).on('change', '#green', function () {
    $('#main').css('background', 'green')
});
$(document).on('change', '#purple', function () {
    $('#main').css('background', 'purple')
});
$(document).on('change', '#normal', function () {
    $('#main').css('background', '')
});
$(document).on('change', '#normal_text', function () {
    $('h1').css('color', '');
    $('p').css('color', '');
});
$(document).on('change', '#green_text', function () {
    $('h1').css('color', 'green');
    $('p').css('color', 'green');
});
$(document).on('change', '#gray_text', function () {
    $('h1').css('color', 'gray');
    $('p').css('color', 'gray');
});

