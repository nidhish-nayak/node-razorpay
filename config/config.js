require("dotenv").config();

module.exports = {
	port: process.env.PORT || 4000,
	razorpay: {
		key_id: process.env.RAZORPAY_KEY_ID,
		key_secret: process.env.RAZORPAY_SECRET,
	},
};
