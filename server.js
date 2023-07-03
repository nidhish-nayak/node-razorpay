const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const errorMiddleware = require("./middleware/errorMiddleware");
const ordersRoute = require("./routes/orders");

const app = express();

app.use(express.json());

// CORS for production
app.use(cors());

// Order APIs
app.use("/orders", ordersRoute);

app.use(errorMiddleware);

app.listen(config.port, () => {
	console.log(`Server is listening at http://localhost:${config.port}`);
});
