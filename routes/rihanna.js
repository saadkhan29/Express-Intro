// Express Module
const express = require('express');

// Invoke Router Functionality
const router = express.Router();

// HTTP GET REQUEST - /rihanna
router.get('/rihanna', (req, res) =>  {
  res.send("Work work work work work");
});

// Export the router
module.exports = router;

