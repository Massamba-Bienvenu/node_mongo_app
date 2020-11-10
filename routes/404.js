const express = require("express");
const errorController = require("../controllers/404.js");
const router = express.Router();


router.use(errorController.get404);

module.exports = router;