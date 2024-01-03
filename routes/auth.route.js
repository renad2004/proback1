const express = require("express")
const router = express.Router()
const authcontrol = require("../controllers/auth.control")
router.post("/register",authcontrol.register)

module.exports = router