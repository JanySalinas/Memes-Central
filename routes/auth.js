const express = require('express');
const passport = require('passport');
const fs = require('fs')
const path = require('path')
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

passport.use(new LocalStrategy(function verify(username, password, cb) {
    let usersArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json")));
    let filteredArray = usersArray.filter(x => x.username == username);
    if (filteredArray.length > 0) {
      let usersData = filteredArray[0];
      if (usersData.password == password) {
        return cb(null, usersData);
      }
    }
    else {
      return cb(null, false);
    }
  }));
  
  passport.serializeUser((user, callback) => {
    callback(null, user);
  });
  
  passport.deserializeUser((user, callback) => {
    const userId = user ? user.username : '';
    callback(null, user);
  });
  
/**
 * Route: GET /login
 * Description: Render the Login page
 */
router.get('/', (req, res) => {
    res.render('login', {currentUser: req.user });
});

/**
 * Route: POST /login
 * Description: Handle Login form submission
 */
router.post('/', passport.authenticate('local', {
    successRedirect: '/memes',
    failureRedirect: '/login/signup'
  }), (err) => {
    console.log(err);
    
  })

/**
 * Route: GET /logout
 * Description: Handle user logout
 */
router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/memes');
    });
  });


/**
 * Route: GET /signup
 * Description: Render the Sign-Up page
 */
router.get('/signup', (req, res) => {
    res.render('signup');
});

/**
 * Route: POST /signup
 * Description: Handle Sign-Up form submission
 */

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
  
    try {
      const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
      const existingUser = users.find(u => u.username === username);
  
      if (existingUser) {
        return res.redirect('/login/signup');
      }
  
      const newUser = { username, password };
      users.push(newUser);
      fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
      res.redirect('/login');
    } catch (err) {
        console.log(err);
        
      res.redirect('/login/signup');
    }
  });



/**
 * Route: GET /guest
 * Description: Allow user to browse as a guest
 */
router.get('/guest', (req, res) => {
    req.session.isAuthenticated = false;
    req.session.isGuest = true;
    res.redirect('/memes');
});


module.exports = router;
