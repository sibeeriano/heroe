const express =require('express');
const router = express.Router();

const maincontroller = require("../controllers/mainController")


router.get('/', maincontroller.index)
router.get('/creditos',maincontroller.creditos)

module.exports = router