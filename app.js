const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const morgan = require('morgan');
const methodOverride = require('method-override');

// Import Routes //
const registrationRoutes = require('./routes/registration');
const questionnaireRoutes = require('./routes/questionnaire');

// Initialize express and use cors
const app = express();
app.use(cors());

// View Engine Setup //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Static Assets Config
app.use(express.static(path.join(__dirname, 'public')));

// Session store
const store = new MongoDBStore({
  uri: 'mongodb://admin:admin@tlw-shard-00-00-xus4c.mongodb.net:27017,tlw-shard-00-01-xus4c.mongodb.net:27017,tlw-shard-00-02-xus4c.mongodb.net:27017/tlw?ssl=true&replicaSet=TLW-shard-0&authSource=admin&retryWrites=true&w=majority',
  collection: 'sessions'
});

// Express Session
app.use(
  session({
    secret: 'tlwstudentportal',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

// Connect flash
app.use(flash());

// Set Global View Variables
app.use((req, res, next) => {
  res.locals.successmsg = req.flash('successmsg');
  res.locals.errormsg = req.flash('errormsg');
  res.locals.infomsg = req.flash('infomsg');
  res.locals.alertmsg = req.flash('alertmsg');
  next();
});

// Development logging
app.use(morgan('dev'));

// Use Routes
app.use('/registration', registrationRoutes);
app.use('/questionnaire', questionnaireRoutes);
app.use('/', (req, res) => {
  res.send('cool');
});

// Handle Errors

module.exports = app;
