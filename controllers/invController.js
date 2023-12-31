const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build inventory by detail view
 * ************************** */
invCont.buildByDetailId = async function (req, res, next) {
  const detail_id = req.params.detailId
  const data = await invModel.getInventoryByDetailId(detail_id)
  const grid = await utilities.buildDetailGrid(data)
  let nav = await utilities.getNav()
  const vehicleName = data.inv_make + " " + data.inv_model
  res.render("./inventory/detail", {
    title: vehicleName,
    nav,
    grid,

  })
}

/* ***************************
 *  Build 500 error view
 * ************************** */
invCont.error500 = async function (req, res, next) {
  const detail_id = req.params.detailId
  const data = await invModel.getInventoryByDetailId(detail_id)
  const grid = await utilities.buildDetailGrid(data)
  const vehicleName = data.inv_make + " " + data.inv_model
  res.render("./inventory/detail", {
    title: vehicleName,
    nav,
    grid,

  })
}


module.exports = invCont