const Razorpay = require("razorpay");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_SECRET,
});

app.get("/orders", async (req, res) => {
	const { price } = req.query;

	try {
		const order = await instance.orders.create({
			amount: price * 100,
			currency: "INR",
			receipt: "receipt#1",
		});

		return res.status(200).json(order);
	} catch (err) {
		return res.status(500).json({
			message: "Something Went Wrong",
		});
	}
});

app.listen(4000, () => {
	console.log("Server is listening at http://localhost:4000");
});
