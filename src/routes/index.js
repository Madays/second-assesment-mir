const express = require('express');

const {isAuthenticated, login, getFavs, createFavs, oneFav, deleteFav} = require('../controllers')

const router = express.Router()

router.post('/login', login)
router.get('/favs',isAuthenticated, getFavs)
router.post('/favs',isAuthenticated, createFavs)
router.get("/favs/:id",isAuthenticated, oneFav)
router.delete("/favs/:id",isAuthenticated, deleteFav)

module.exports = router