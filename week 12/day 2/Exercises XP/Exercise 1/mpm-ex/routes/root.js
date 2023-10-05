const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.send("Homepage"))
    .post((req, res) => res.send("About Us page"));
    
module.exports = router;