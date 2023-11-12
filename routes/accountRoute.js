//Login view
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")


//Deliver login
router.get("/login", utilities.handleErrors(accountController.buildLogin))
// Deliver registration
router.get("/registration", utilities.handleErrors(accountController.buildRegistration))
// Registration route
router.post('/register', utilities.handleErrors(accountController.registerAccount))

module.exports = router