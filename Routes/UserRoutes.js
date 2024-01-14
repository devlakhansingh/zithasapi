const express = require("express")
const { createuser, getuser } = require("../Controller/UserController")

const router = express.Router()

router.get("/", getuser)
router.post("/", createuser)


module.exports = router