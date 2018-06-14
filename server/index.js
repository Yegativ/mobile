/**
 * Created by БуряковВ on 23.05.2018.
 */
"use strict";

const
    express = require('express'),
    cors = require('cors'),
    app = express(),
    http = require('http').Server(app),
    path = require('path');

app.use(cors({credentials: true, origin: true}));
app.use('/images', express.static('images'));
app.post('/heroes', function (req, res) {
    let mass = [
        'Человек-паук',
        'Железный человек',
        'Капитан Америка',
        'Халк',
        'Тор'
    ];
    res.send(mass);
});
app.post('/films', function (req, res) {
    let mass = [
        { film: 'Пираты Карибского моря', rate: 6.6, poster: '2.jpg' },
        { film: 'Логан', rate: 7.5, poster: '3.jpg'  },
        { film: 'Чудо-женщина', rate: 6.8, poster: '4.jpg' },
        { film: 'Тор: Рагнарёк', rate: 7.6, poster: '5.jpeg' },
        { film: 'Стражи Галактики', rate: 7.5, poster: '6.jpg' }
    ];
    res.send(mass);
});

http.listen(8081, function () {
    console.log('Server is running on port 8081');
});