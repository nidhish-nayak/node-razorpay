const express = require("express");
const router = express.Router();
const razorpayInstance = require("../modules/razorpay");

// Create new order on payment
router.get("/", async (req, res, next) => {
	const { price } = req.query;

	try {
		const order = await razorpayInstance.orders.create({
			amount: price * 100,
			currency: "INR",
			receipt: "receipt#1",
		});
		res.status(200).json(order);
	} catch (error) {
		next(error);
	}
});

// Fetch payment details on order/payment completion
router.get("/:orderId/payments", async (req, res, next) => {
	const { orderId } = req.params;

	try {
		const payment = await razorpayInstance.orders.fetchPayments(orderId);
		res.status(200).json(payment);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
