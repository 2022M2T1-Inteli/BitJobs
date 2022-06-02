const express = require('express');
const router = express.Router();

//Importações necessárias
const matchController = require('../controllers/Match')
const userAuth = require('../Middlewares/unsureAuthenticated')
const adminAuth = require('../Middlewares/unsureAdmin')

//ROUTAS com seus respectivos controlers e middlewares
router.post('/Match', matchController.match)

//Exporta o ROUTER
module.exports = router