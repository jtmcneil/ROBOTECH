const dotenv = require('dotenv'); // TODO: Don't include in prod
dotenv.config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('./models/user');

const campaignRoutes = require('./routes/campaigns');
const playerRoutes = require('./routes/players');
const occupationRoutes = require('./routes/occupations');
const skillRoutes = require('./routes/skills');
const userRoutes = require('./routes/users');
const miscRoutes = require('./routes/misc');

// connect to DB
//'mongodb://localhost:27017/robotech'
const dbUrl = process.env.MONGO_URL;
mongoose.connect(dbUrl, {});

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
app.use(morgan('dev')); //TODO don't include in prod

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: process.env.SESSION_SECRET
    }
});

store.on('error', (err)=>{console.log(`SESSION STORE ERROR: ${err}`);})

const sessionConfig = {
    store,
    name: 'robosesh',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, // security measure
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // one week from now
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({usernameField: 'email'}, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals = {
        path: req.path,
        currentUser: req.user,
        title: 'ROBOTECH CHARACTER CREATOR',
        success: req.flash('success'),
        error: req.flash('error')
    };
    next();
});

//ROUTES

app.use('/campaigns', campaignRoutes);
app.use('/players', playerRoutes);
app.use('/occupations', occupationRoutes);
app.use('/skills', skillRoutes);
app.use('/', userRoutes);
app.use('/', miscRoutes);

app.get('/', (req, res) => {
    res.render( 'home');
});

app.all('*', (req, res, next) => {
    res.render('misc/404');
}); 


app.listen(3000, ()=> {
    console.log('Serving on port 3000');
});