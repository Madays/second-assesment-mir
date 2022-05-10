const mongoose = require('mongoose');

// const createDbConnection = (dbURL) => {
//   mongoose.connect(dbURL)
//     .then(() => console.log('DB connected'))
//     .catch((err) => console.log('error on connection', err));
// }

const createDbConnection = async (dbURL) => {
  try{
    await mongoose.connect(dbURL)
    console.log('DB connected')
  } catch(err){
    console.log('error on connection', err)
  }
}

module.exports = createDbConnection
