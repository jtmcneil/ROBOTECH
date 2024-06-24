const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();

// EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWEAR
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


//ROUTES
app.get('/', (req, res) => {
    res.send('home');
});

app.listen(3000, ()=> {
    console.log('Serving on port 3000')
});