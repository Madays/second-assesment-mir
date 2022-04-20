const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

const createDbConnection = require('./config/databaseConfig')
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

createDbConnection(`${process.env.MONGO_URI}`);

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)

app.listen(process.env.PORT, () => console.log(`Servidor en el puerto ${process.env.PORT}`))

