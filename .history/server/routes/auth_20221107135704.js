const express = require("express");

const { signip, login } = require("../controllers/auth");

const router = express.Router();

router.post("/signup");
router.post("/login");

module.exports = router;
