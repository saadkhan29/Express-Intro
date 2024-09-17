// Load the express module on server
const express = require('express');

// Create a new instance of express on our server
// Invoke the express module
const app = express();

// PORT Configurations
const PORT = 4000;

// Request Parser/ Body Parser
app.use(express.urlencoded({extended: true}));

// Import Routes
const indexRouter = require('./routes/index');
const peopleRouter = require('./routes/people');
const greetingRouter = require('./routes/greeting');
const rihannaRouter = require('./routes/rihanna');
const miscRouter = require('./routes/misc');

// Mount Routes
app.use('/', indexRouter);
app.use('/', peopleRouter);
app.use('/', greetingRouter);
app.use('/', rihannaRouter);
app.use('/', miscRouter);

// Tells the server to listen for requests on PORT 4000
app.listen(PORT, function() {
  console.log(`Hello-express app is listening on PORT ${PORT}`)
});







