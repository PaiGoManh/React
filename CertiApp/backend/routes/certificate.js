const express = require("express");
const router = express.Router();
const cert = require("../models/certificate");

router.get("/certificates", async (req, res) => {
  const details = await cert.find({});
  res.json(details);
});

module.exports = router