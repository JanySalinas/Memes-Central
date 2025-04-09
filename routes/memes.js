const express = require('express');
const axios = require('axios');
const router = express.Router();

let memesCache = []; // Store memes globally

// Fetch memes from the API once
const fetchMemes = async () => {
  try {
    const response = await axios.get('http://jss.restapi.co.za/memes');
    console.log('API Response:', response.data);  // Log the API response
    memesCache = response.data; // Save memes in cache
  } catch (error) {
    console.error('Error fetching memes:', error.message); // Log the error
  }
};

// Fetch memes on server startup
fetchMemes();

// Route for the memes overview page
// Wont get called, confliting route, remove
router.get('/', (req, res) => {
  console.log('Memes Cache:', memesCache);  // Log memesCache before rendering
  res.render('memes', { memes: memesCache }); // Pass cached memes to the view
});

module.exports = router;
