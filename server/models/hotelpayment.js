  const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelPaymentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  userphone: {
    type: Number,
    required: true,
  },
  startD: {
    type: String,
  },
  endD: {
    type: String,
  },
  total: String,

  status: {
    type: String,
    default: "user",
  },
});

const hotelpayment = mongoose.model("hotelpayment", hotelPaymentSchema);
module.exports = hotelpayment;