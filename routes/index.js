// Express Module
const express = require('express');

// Invoke Router Functionality
const router = express.Router();

// HTTP GET REQUEST - OUR Root Route API
router.get('/', (req, res) => {
  // When a request comes in at localhost:4000/ OR 127.0.0.1:4000/, this function will be executed.
  res.send("Hello Saad");
});

// Export the router
module.exports = router;

