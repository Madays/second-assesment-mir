const express = require('express')
const routes = require('./routes/index')
const app = express()


// const bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


//app.get('/', (req, res) => res.send('App is working'))
app.use(express.json());
app.use('/api', routes);

module.exports = app;



