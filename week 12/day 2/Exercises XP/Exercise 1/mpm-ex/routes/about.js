const express = require("express");
const router = express.Router();
router
    .route("/")
    .delete((req, res) => res.send("Homepage"))
    .put((req, res) => res.send("About Us page"));
module.exports = router;