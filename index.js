import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
const IN_PROD = process.env.NODE_ENV === "production";

// MIDDLEWARES
app.use(cors())

app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
	console.log(req.ip);
	res.send({ data: "I am the Best!" });
});

// INITIALIZE EXPRESS PORT AND LISTEN
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
	if (err) console.log("Error in running express : " + err);
	else console.log("Server running on port : " + port);
});
