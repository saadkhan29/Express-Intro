// Express Module
const express = require('express');

// Invoke Router Functionality
const router = express.Router();

// HTTP GET REQUEST - OUR Root Route RESTFul API
router.get('/home', (req, res) => {
  res.send({"response": "Hello, This is my first express router. And I am very hroutery to install Nodemon"});
});

// HTTP GET REQUEST - /express
router.get ('/express', (req, res) => {
  // req.route (Shows route Information)
  // req.query (Shows query params)
  // req.params (Shows URL params)
  // req.body (Shows body data)
  console.log(req.route)
  console.log(req.query)
  console.log(req.params)
  console.log(req.body)
  res.send("We are loving Express");
});

// https://www.amazon.com/routerle-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D

// URL Params
// router.get("/hello/:message", (req, res) => {
//   res.send(`Hello, ${req.params.message}`)
// });

// URL Params and QUERY Params
router.get("/hello/:message", (req, res) => {
  console.log(req.query)
  console.log(req.params)
  res.send(`hello, ${req.params.message}. My name is ${req.query.firstName} ${req.query.lastName}`)
});

// Export the router
module.exports = router;

