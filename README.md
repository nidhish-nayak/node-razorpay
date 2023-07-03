# 🌟 Razorpay Payment Gateway API with NodeJS 🌟

Supercharge your Node.js server with the power of Razorpay payment gateway!

## ✨ Prerequisites

Before you dive into the magic of Razorpay Payment Gateway Integration API, make sure you have the following enchantments ready:

- 🧙‍♂️ Node.js installed on your machine.
- 🧪 A mystical Razorpay account with API key and secret.

## 🚀 Getting Started

To embark on this mystical journey, follow these steps:

1. ✨ Clone the repository and enter the magical realm:

   ```bash
   git clone <repository-url>
   cd node-razorpay
   ```

2. 🧙‍♂️ Cast the spell to install the dependencies:

   ```bash
   npm install
   ```

3. 📜 Create a `.env` scroll in the root directory and inscribe your Razorpay API key and secret within:

   ```plaintext
   RAZORPAY_KEY_ID=<your-key-id>
   RAZORPAY_SECRET=<your-secret>
   ```

4. 🎩 Wave your wand to start the server:

   ```bash
   npm run dev
   ```

   The portal to the server will open at http://localhost:4000. Enter at your own risk!

## 🧙‍♂️ API Endpoints

The API is home to the following magical portals:

#### ✨ GET /orders

- This 🔮 portal allows you to create a Razorpay order with just a flick of your wand. Simply provide the desired `price` and behold the order details that will be revealed to you!

#### 🎁 Request Parameters

- `price` (query parameter): The price of the order you wish to create.

#### 🔮 Response

- Success: 200 OK! The order details will be unveiled in the response body, ready for you to explore.
- Error: 500 Internal Server Error! An error message will be revealed, guiding you through the troubles.

#### ✨ GET /orders/:orderId/payments

- This 🌟 portal allows you to fetch the payments associated with a specific order. Provide the `orderId` and witness the magical details of the payments unfold before your eyes!

#### 🎁 Request Parameters

- `orderId` (query parameter): The ID of the order for which you want to fetch the payments.

#### 🔮 Response

- Success: 200 OK! The payment details will be revealed in the response body, showcasing the captivating information.
- Error: 500 Internal Server Error! An error message will be unveiled, guiding you through the troubles.

## 🧙‍♂️ Usage

To create a Razorpay order, whisper the sacred incantation in the form of a GET request to the `/orders` portal, with the `price` query parameter set to the desired amount. The API will wield its powers to create the order and reveal its magnificent details.

🪄 Example Incantation:

```http
GET /orders?price=1000
```

⚡️ Example Response:

```json
{
	"id": "order_1234567890",
	"entity": "order",
	"amount": 1000,
	"currency": "INR",
	"receipt": "receipt#1",
	"createdAt": 1671234567
	// ... other captivating order details
}
```

To fetch the payments associated with a specific order, conjure a GET request to the `/orders/:orderId/payments` portal, replacing `:orderId` with the actual ID of the order

. The API will unleash its powers and reveal the mesmerizing payment details.

🪄 Example Incantation:

```http
GET /orders/order_1234567890/payments
```

⚡️ Example Response:

```json
{
	"count": 2,
	"entity": "collection",
	"items": [
		{
			"id": "pay_1234567890",
			"entity": "payment",
			"order_id": "order_1234567890",
			"amount": 1000,
			"status": "captured"
			// ... other captivating payment details
		},
		{
			"id": "pay_0987654321",
			"entity": "payment",
			"order_id": "order_1234567890",
			"amount": 2000,
			"status": "captured"
			// ... other captivating payment details
		}
	]
	// ... other captivating collection details
}
```

## ✨ Contributing

Join the league of magical developers! Contributions are welcomed and celebrated in this mystical realm. If you encounter any issues or have ideas for enchantments, feel free to open an issue or cast a pull request.

## 📜 License

#### This project is licensed under the [MIT License](LICENSE). Cast your spells responsibly!

Feel free to further customize the README according to your project's requirements and add any additional information or sections as needed.

Happy coding!
