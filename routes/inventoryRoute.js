// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/index")

// Route to build inventory by classification view
router.get("/type/:classificationId",utilities.handleErrors( invController.buildByClassificationId));
router.get("/detail/:detailId",utilities.handleErrors( invController.buildByDetailId));
router.get("/error500", utilities.handleErrors( invController.error500));

module.exports = router;
