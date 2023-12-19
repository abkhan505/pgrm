const express = require('express') // Pulls in express
const router = express.Router() // Pulls in Router for redirection
const authController = require('../controllers/auth') // Points to auth in controllers folder
const homeController = require('../controllers/home') // Points to home in controllers folder
const { ensureAuth, ensureGuest } = require('../middleware/auth') // 

router.get('/', homeController.getIndex) // If receive request for '/', use getIndex method from homeController which retreives index.html (.ejs technically but is rendered to html)
router.get('/login', authController.getLogin) // Redirects to authentication for login
router.post('/login', authController.postLogin) // Redirects to login
router.get('/logout', authController.logout) // Redirects to logout
router.get('/signup', authController.getSignup) // Redirects to sign up
router.post('/signup', authController.postSignup) // Redirects to sign up 

module.exports = router