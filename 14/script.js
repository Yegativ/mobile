'use strict';
const theme = document.querySelector("#theme");
$(document).on('change', '#theme', function () {
    $('#main').toggleClass('ui-body-b', 'ui-body-a');
    $('#settings').toggleClass('ui-body-b', 'ui-body-a');

});