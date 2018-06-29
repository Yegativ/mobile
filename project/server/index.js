"use strict";

const
    express = require('express'),
    cors = require('cors'),
    app = express(),
    http = require('http').Server(app),
    path = require('path');

app.use(cors({credentials: true, origin: true}));
app.use('images', express.static('images'));
app.post('/goods', function (req, res) {
    let mass = [
        { id: "cat1", goods: 'Вышивка-картинка', rate: 6.6, photo: '3.jpg', price: "5000тг", filter: 'embrodiery'},
        { id: "cat2", goods: 'Открытка', rate: 7.5, photo: '4.png' ,price:'500 тг', filter: 'postcard' },
        { id: "cat3", goods: 'шкатулка', rate: 6.8, photo: '2.png', price:'2500 тг', filter: 'box' },
        { id: "cat4", goods: 'плюшевый мишка', rate: 7.6, photo: '1.png', price: '3500 тг', filter: 'toy'}
    ];
    res.send(mass);
});

http.listen(8081, function () {
    console.log('Server is running on port 8081');
});