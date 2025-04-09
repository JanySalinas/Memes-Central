// filepath: /c:/Users/miss_/OneDrive/Dokumenter/BED1/koding læring/assignment 2025/aug24ft-jss-ca-1-JanySalinas/utils/apiHelper.js
const axios = require('axios');

const fetchMemes = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('API Helper Error:', error.message);
    throw error;
  }
};

module.exports = { fetchMemes };