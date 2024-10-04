const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("Authentication/Register/register.ejs");
})

module.exports = router;