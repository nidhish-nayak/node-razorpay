require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
	[1, { priceInCents: 10000, name: "Nidhish" }],
	[2, { priceInCents: 20000, name: "Nishanth" }],
]);

app.listen(3000, () => {
	console.log("Listening to port 3000!");
});
