const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const morgan = require('morgan');

const campaignRoutes = require('./routes/campaigns');
const playerRoutes = require('./routes/players');
const occupationRoutes = require('./routes/occupations');
const skillRoutes = require('./routes/skills');

// connect to DB
mongoose.connect('mongodb://localhost:27017/robotech', {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

// EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWEAR
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(morgan('dev'));

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
app.use('/players', playerRoutes);
app.use('/occupations', occupationRoutes);
app.use('/skills', skillRoutes);

app.listen(3000, ()=> {
    console.log('Serving on port 3000');
});