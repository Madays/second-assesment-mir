const mongoose = require('mongoose');

const createDbConnection = (dbURL) => {
  mongoose.connect(dbURL)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('error on connection', err));
}

module.exports = createDbConnection