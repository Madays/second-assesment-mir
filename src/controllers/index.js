const favModel = require("../model/fav")
const jwt = require('jsonwebtoken');

//login
const login = (req, res) => {
    const user = {id: 3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token
    });
}

//get favs
const getFavs =  (req, res) => {
    favModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

//create one fav
const createFavs = async (req, res) => {
    try {
        const fav = favModel(req.body);
      await fav.save()
      res.send('saved fav')
    } catch(e) {
        console.error(e)
    }
};

//get one fav
const oneFav = (req, res) => {
    const { id } = req.params;
    favModel
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

//delete one fav
const deleteFav = (req, res) => {
    const { id } = req.params;
    favModel
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

function isAuthenticated(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    isAuthenticated,
    login,
    getFavs,
    createFavs,
    oneFav,
    deleteFav
}