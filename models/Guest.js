const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestSchema = new Schema(
  {
    name: String,
    adults: { type: Number, default: 0 },
    children: { type: Number, default: 0 },
    daysAttending: Array,
    camping: String,
    favoriteSong: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Guest = mongoose.model("GuestChoice", GuestSchema);
module.exports = Guest;
