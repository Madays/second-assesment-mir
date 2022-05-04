const express = require('express');
const isAuthenticated = require('../auth/isAuthenticate')
const {login, getFavs, createFavs, oneFav, deleteFav} = require('../controllers/index')

const router = express.Router()

router.post('/login', login)
router.get('/favs', getFavs)
router.post('/favs',isAuthenticated, createFavs)
router.get("/favs/:id",isAuthenticated, oneFav)
router.delete("/favs/:id",isAuthenticated, deleteFav)

module.exports = router;
