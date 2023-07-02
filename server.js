const Razorpay = require("razorpay");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

// The Razorpay instance is created outside - reusing for each request.
const razorpayInstance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_SECRET,
});

// Creating order using razorpay instance to make payments
app.get("/orders", async (req, res) => {
	const { price } = req.query;

	try {
		const order = await razorpayInstance.orders.create({
			amount: price * 100,
			currency: "INR",
			receipt: "receipt#1",
		});
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json({
			message: "Error when creating a new order",
			errorValue: error,
		});
	}
});

// Payment fetching on auto-captured payments using orderid
app.get("/orders/:orderId/payments", async (req, res) => {
	const { orderId } = req.query;

	try {
		const payment = await razorpayInstance.orders.fetchPayments(orderId);
		res.status(200).json(payment);
	} catch (error) {
		res.status(500).json({
			message: "Error when fetching payments from the order created",
			errorValue: error,
		});
	}
});

app.listen(4000, () => {
	console.log("Server is listening at http://localhost:4000");
});
