const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initialize Express
const app = express();

//Bring in users folder from routes folder
const users = require('./routes/users');

//Port Number
const port = 3000;

//CORS Middlware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//Using /users for all the user routes
app.use('/users', users); 

//Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

//Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
})