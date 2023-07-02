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

// API for creating orders using Razorpay SDK
app.get("/order", (req, res) => {
	try {
		const options = {
			amount: 10 * 100, // amount == Rs 10
			currency: "INR",
			receipt: "receipt#1",
			payment_capture: 1,
			// 1 for automatic capture // 0 for manual capture
		};
		instance.orders.create(options, async function (err, order) {
			if (err) {
				return res.status(500).json({
					message: "Something Went Wrong",
				});
			}
			return res.status(200).json(order);
		});
	} catch (err) {
		return res.status(500).json({
			message: "Something Went Wrong",
		});
	}
});

//API the captures the payment
app.post("/capture/:paymentId", (req, res) => {
	try {
		return request(
			{
				method: "POST",
				url: `https://${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
				form: {
					amount: 10 * 100, // amount == Rs 10 // Same As Order amount
					currency: "INR",
				},
			},
			async function (err, response, body) {
				if (err) {
					return res.status(500).json({
						message: "Something Went Wrong",
					});
				}
				console.log("Status:", response.statusCode);
				console.log("Headers:", JSON.stringify(response.headers));
				console.log("Response:", body);
				return res.status(200).json(body);
			}
		);
	} catch (err) {
		return res.status(500).json({
			message: "Something Went Wrong",
		});
	}
});

app.listen(4000, () => {
	console.log("Server is listening at http://localhost:4000");
});
