"use strict";
const enable_button = document.querySelector("#enable");
const theme = document.querySelector("#theme");
$(document).on('change', '#theme', function () {
    $('#main').toggleClass('ui-body-b', 'ui-body-a');

});

$('#save').click(function () {
    $('#theme').flipswitch('disable');
});
enable_button.onclick = function () {
  $('#theme').flipswitch('enable');
};

