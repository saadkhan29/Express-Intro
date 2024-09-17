// Express Module
const express = require('express');

// Invoke Router Functionality
const router = express.Router();

// HTTP GET REQUEST - /greeting
router.get('/greeting', (req, res) =>  {
  res.send('Hey, SEI Students!');
});

// Export the router
module.exports = router;

