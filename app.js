const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Initial connection error:', err));

mongoose.connection.on('error', err => console.error('Runtime DB error:', err));

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});