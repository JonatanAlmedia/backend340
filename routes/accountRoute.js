//Login view
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require('../utilities/account-validation')


//Deliver login
router.get("/login", utilities.handleErrors(accountController.buildLogin))
// Deliver registration
router.get("/registration", utilities.handleErrors(accountController.buildRegistration))
// Registration route
router.post(
    '/registration', 
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
)

// Process the login attempt
router.post(
    "/login",
    (req, res) => {
      res.status(200).send('login process')
    }
  )

  
module.exports = router