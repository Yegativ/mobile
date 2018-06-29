"use strict";
let slider = $('#slider');
let currentSlide = 0;
let list = $('#list');
let slide = $('.slide');
let interval = -360 * currentSlide;

slider.swiperight(function () {
    currentSlide--;
    interval = -360 * currentSlide;
    if (currentSlide === -1){
        currentSlide++;
        list.css('left', '50px');
        setTimeout(function () {
            list.css('left','')
        }, 200);
    } else {
        list.css('left', interval + 'px');
    }
});
slider.swipeleft(function () {
    currentSlide++;
    if (currentSlide !== slide.size()) {
        interval = -360 * currentSlide;
        list.css('left', interval + 'px');
    }
    else {
        currentSlide--;
        interval = -360 * currentSlide;
        list.css('left', interval - 50 + 'px');
        setTimeout(function () {
            list.css('left', interval)
        }, 200);
    }
});
