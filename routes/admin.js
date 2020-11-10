const express = require("express");
const router = express.Router();
const producstController = require("../controllers/products.js");

// /admin/add-product => GET
router.get('/add-product', producstController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', producstController.postAddProduct);

module.exports = router;
