const express = require('express');
const router = express.Router();
const { fetchMemes } = require('../utils/apiHelper');
const config = require('../config.json');
const { ensureAuthenticated } = require('../middlewares/authMiddleware'); // Existing
let memesCache = [];

var ensureLogIn = require('connect-ensure-login').ensureLoggedIn;
var ensureLoggedIn = ensureLogIn();

// Middleware: Ensure Authenticated or Guest
function ensureAuthenticatedOrGuest(req, res, next) {
  if (req.session.isAuthenticated || req.session.isGuest) {
    return next();
  }
  res.redirect('/login');
}

// Fetch memes from the API once
const initializeMemes = async () => {
  try {
    const data = await fetchMemes(config.apiUrl);
    if (Array.isArray(data)) {
      memesCache = data;
    } else if (data && Array.isArray(data.memes)) {
      memesCache = data.memes;
    } else {
      console.error('Unexpected API response structure:', data);
    }
  } catch (error) {
    console.error('Error initializing memes:', error.message);
  }
};

// Initialize memes on server startup
initializeMemes();

/**
 * Route: GET /memes
 * Description: Render the Memes Overview page with optional search functionality.
 * Access: Authenticated Users and Guests
 */
router.get('/', (req, res) => {
  try {
    const searchQuery = req.query.search ? req.query.search.trim().toLowerCase() : '';
    let filteredMemes = memesCache;

    if (searchQuery) {
      filteredMemes = memesCache.filter(meme =>
        meme.name.toLowerCase().includes(searchQuery)
      );
      console.log(`Search Query: "${searchQuery}" - Found ${filteredMemes.length} memes.`);
    }

    // Determine user status
    const isGuest = req.session.isGuest || false;
    const isAuthenticated = req.session.isAuthenticated || false;

    res.render('memes', { memes: filteredMemes, search: req.query.search || '', user: req.user });
  } catch (error) {
    console.error('Error rendering memes overview:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * Route: GET /memes/:id
 * Description: Render the Meme Details page for a specific meme.
 * Access: Authenticated Users Only
 */
router.get('/:id',ensureLoggedIn, (req, res) => {
  try {
    const memeId = parseInt(req.params.id, 10);
    const meme = memesCache.find(m => m.id === memeId);

    if (meme) {
      res.render('meme', { meme, user:req.user });
    } else {
      res.status(404).send('Meme not found');
    }
  } catch (error) {
    console.error('Error rendering meme details:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
