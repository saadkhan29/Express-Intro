// Express Module
const express = require('express');

// Invoke Router Functionality
const router = express.Router();

// Array of Objects
let people = [
  {firstName: 'Saad', lastName: 'Iqbal'},
  {firstName: 'Alice', lastName: 'Tom'},
  {firstName: 'Bob', lastName: 'Kin'}
];

// HTTP GET REQUEST - Read Operation in CRUD - RESTFul API - JSON
router.get('/api/people.json', (req, res) => {
  res.json({people}); // people: people
});

// HTTP GET REQUEST API - EJS
router.get('/api/people', (req, res) => {
  res.render('../views/people.ejs', {data: people});
});

// HTTP GET REQUEST - CREATE API
router.get('/api/createPerson', (req, res) => {
  res.render('../views/createPerson.ejs');
});

// HTTP POST REQUEST - CREATE API
router.post('/api/person', (req, res) => {
  // Receive the data from form and save it in a People array.
  people.push({firstName: req.body.firstName, lastName: req.body.lastName});
  res.render('../views/people.ejs', {data: people});
});

// HTTP DELETE/GET REQUEST
router.get('/api/person/delete', (req, res ) => {
  console.log(req.query.id);
  people.splice(req.query.id, 1);
  res.render('../views/people.ejs', {data: people});
});

// HTTP GET REQUEST - EDIT API
router.get('/api/person/edit', (req, res) => {
  res.render('../views/updatePerson.ejs', {data: people[req.query.id], id: req.query.id});
});

// HTTP PUT/POST REQUEST - UPDATE API
router.post('/api/person/update', (req, res) => {
  console.log(req.body.id);
  people.splice(req.body.id, 1, {firstName: req.body.firstName, lastName: req.body.lastName});
  res.render('../views/people.ejs', {data: people});
});


// Export the router
module.exports = router;

