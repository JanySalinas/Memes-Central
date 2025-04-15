const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
var passport = require('passport')

// Import your routers
const indexRouter = require('./routes/index');
const memeRouter = require('./routes/meme');
const authRouter = require('./routes/auth'); // Import auth routes here

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Session middleware configuration
app.use(
  session({
    secret: 'your-secret-key', // Replace with a strong secret in production
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Make session and user data available to all views
// GPT
app.use(function (req, res, next) {
  res.locals.isAuthenticated = req.session.isAuthenticated || false;
  res.locals.isGuest = req.session.isGuest || false;
  res.locals.user = req.session.user || null;
  next();
});


// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Routes
app.use('/login', authRouter); // Register auth routes

app.use('/memes', memeRouter); // Existing meme routes

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only provide error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(process.env.PORT||3000,() => {
  console.log("Server listening on ", process.env.PORT || 3000);
})
module.exports = app;
