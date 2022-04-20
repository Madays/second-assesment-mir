const favModel = require("../model/fav")

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

module.exports = {
    getFavs,
    createFavs,
    oneFav,
    deleteFav
}