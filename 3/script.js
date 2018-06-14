"use strict";
let thanos = {
    soul: 'Камень души',
    power: 'Камень силы',
    time: 'Камень времени',
    space: 'Камень пространства',
    reality: 'Камень реальности',
    mind: 'Камень разума'
};
const bold = $(".bold");
$('#soul').text(thanos.soul);
$('#power').text(thanos.power);
$('#time').text(thanos.time);
$('#space').text(thanos.space);
$('#reality').text(thanos.reality);
$('#mind').text(thanos.mind);
bold.click(function () {
    $(this).css('font-weight', 'bold')
});
