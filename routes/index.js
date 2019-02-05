const express = require("express");
const router = express.Router();
const Guest = require("../models/Guest");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("invitation");
});
router.get("/rsvp", (req, res, next) => {
  res.render("index");
});

router.post("/save-details", (req, res, next) => {
  console.log(req.body);
  const {
    name,
    daysAttending,
    adults,
    children,
    camping,
    favoriteSong
  } = req.body;
  const data = {
    name,
    daysAttending,
    adults,
    children,
    camping,
    favoriteSong
  };
  Guest.create(data).then(response => {
    res.render("success");
  });
});

router.get("/attending", (req, res, next) => {
  Guest.find().then(response => {
    res.render("attending", { response });
  });
});
module.exports = router;
