const express = require('express');

const {getFavs, createFavs, oneFav, deleteFav} = require('../controllers')

const router = express.Router()

router.get('/favs', getFavs)
router.post('/favs', createFavs)
router.get("/favs/:id", oneFav)
router.delete("/favs/:id", deleteFav)

module.exports = router