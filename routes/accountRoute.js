//Login view
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utulities = require("../utilities")


//Deliver login
router.get("/login", utulities.handleErrors(accountController.buildLogin))

module.exports = router