const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const campaignRoutes = require('./routes/campaigns');

const app = express();

// EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWEAR
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use((req, res, next) => {
    res.locals = {
        title: req.path === '/' ? 'HOME' : req.path.toUpperCase().substring(1)
    };
    next();
});

//ROUTES
app.get('/', (req, res) => {
    res.render( 'home');
});

app.use('/campaigns', campaignRoutes);

app.listen(3000, ()=> {
    console.log('Serving on port 3000');
});