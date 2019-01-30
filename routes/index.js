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
  const { name, daysAttending, extraGuests, camping } = req.body;
  const data = { name, daysAttending, extraGuests, camping };
  Guest.create(data).then(response => {
    res.render("success");
  });
});
module.exports = router;
