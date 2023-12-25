const express = require('express') // Pulls in express
const router = express.Router() // Pulls in Router for redirection
const homeController = require('../controllers/home') // Points to home in controllers folder
const aboutController = require('../controllers/about')
const { ensureAuth, ensureGuest } = require('../middleware/auth') // 

/* router.get('/', homeController.getIndex) */ // If receive request for '/', use getIndex method from homeController which retreives index.html (.ejs technically but is rendered to html)
router.get('/about', aboutController.getAbout) 

module.exports = router