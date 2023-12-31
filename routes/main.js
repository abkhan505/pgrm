const express = require('express') // Pulls in express
const router = express.Router() // Pulls in Router for redirection
const authController = require('../controllers/auth') // Points to auth in controllers folder
const homeController = require('../controllers/home') // Points to home in controllers folder
const { ensureAuth, ensureGuest } = require('../middleware/auth') // 

router.get('/', homeController.getIndex) // If receive request for '/', use getIndex method from homeController which retreives index.html (.ejs technically but is rendered to html)

module.exports = router