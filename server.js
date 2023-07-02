const Razorpay = require("razorpay");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

// The Razorpay instance is created outside the /orders route handler, and the instance is reused for each request.
const razorpayInstance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_SECRET,
});

app.get("/orders", async (req, res) => {
	const { price } = req.query;

	try {
		const order = await razorpayInstance.orders.create({
			amount: price * 100,
			currency: "INR",
			receipt: "receipt#1",
		});
		return res.status(200).json(order);
	} catch (error) {
		return res.status(500).json({
			message: "Something Went Wrong",
			errorValue: error,
		});
	}
});

app.listen(4000, () => {
	console.log("Server is listening at http://localhost:4000");
});
