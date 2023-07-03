const Razorpay = require("razorpay");
const config = require("../config/config");

const razorpayInstance = new Razorpay(config.razorpay);

module.exports = razorpayInstance;
