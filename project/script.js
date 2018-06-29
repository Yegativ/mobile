'use strict';
let listview = '';
let box = $('#box');
let postcard = $("#postcard");
let embrodiery = $("#embrodiery");
let toy = $("#toy");
var mass;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
let visible = true;
const cat1 = $("#cat1");
const cat2 = $("#cat2");
const cat3 = $("#cat3");
const cat4 = $("#cat4");
const toy_filter = $("#toy_filter");
const embrodiery_filter = $("#embrodiery_filter");
const box_filter = $("#box_filter");
const postcard_filter = $("#postcard_filter");
const list = $("#list");

var config = {
    apiKey: "AIzaSyAxJxvzv3Li4C8qSGNYmXxFomqxYEMULAE",
    authDomain: "project-df926.firebaseapp.com",
    databaseURL: "https://project-df926.firebaseio.com",
    projectId: "project-df926",
    storageBucket: "project-df926.appspot.com",
    messagingSenderId: "160247263160"
};

firebase.initializeApp(config);

var dbRef = firebase.database();
var contactsRef = dbRef.ref('goods');

contactsRef.on("value", function(snap) {
    console.log("value", snap.val());
    $('#contacts').append(contactHtmlFromObject(snap.val()));
});
function contactHtmlFromObject(goods) {
    console.log(goods);
    var html = '';
    for(var k in goods) {
        if (goods[k].inbacket == 0) {
            console.log(k, goods[k]);
            html += '<div style="float: left; width: 45%;">';
            html += '<li id="'+goods[k].filter+'">';
            html += '<img src="images/'+goods[k].photo+'">';
            html += '</div>';
            html += '<div>';
            html += '<div id="float"><h4 id="header_label">'+goods[k].name+'</h4>';
            html += '<h5 id="h2_label">'+goods[k].rate+'</h5>';
            html += '<h5>'+goods[k].price+'</h5>';
            html += '<a href="'+goods[k].filter+'" class="ui-btn fas fa-cart-arrow-down" id="'+goods[k].filter+'"></a>';
            html += '</div>';
            html += '</li>';
        }
    }
    return html;
}

contactsRef.set({
    inbacket: 1
}, function(error) {
    if (error) {
        // The write failed...
    } else {
        // Data saved successfully!
    }
});

const theme = document.querySelector("#theme");
$(document).on('change', '#theme', function () {
    $('#main').toggleClass('ui-body-b', 'ui-body-a');
    $('#settings').toggleClass('ui-body-b', 'ui-body-a');
    $('#package').toggleClass('ui-body-b', 'ui-body-a');
    $('#buying').toggleClass('ui-body-b', 'ui-body-a');
});
toy_filter.onclick = function () {
    if(toy.visible(true)){
        toy.visible(false);
    }
    else {
        toy.visible(true);
    }
};
box_filter.onclick = function () {
    if(box.visible(true)){
        box.visible(false);
    }
    else {
        box.visible(true);
    }
};
embrodiery_filter.onclick = function () {
    if(embrodiery.visible(true)){
        embrodiery.visible(false);
    }
    else {
        embrodiery.visible(true);
    }
};
postcard_filter.onclick = function () {
    if(postcard.visible(true)){
        postcard.visible(false);
    }
    else {
        postcard.visible(true);
    }
};

