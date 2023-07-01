const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body;
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "inr",
			description: "Fabric clothing payment testing",
			payment_method: id,
			confirm: true,
		});
		console.log("Payment: ", payment);
		res.json({
			message: "Payment successful",
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.json({
			message: "Payment failed",
			success: false,
		});
	}
});

app.listen(process.env.PORT || 4000, () => {
	console.log("Listening to port 4000!");
});
