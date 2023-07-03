const Razorpay = require("razorpay");
const config = require("../config/config");
require("dotenv").config();

const razorpayInstance = new Razorpay(config.razorpay);

module.exports = razorpayInstance;
