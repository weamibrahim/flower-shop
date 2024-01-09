const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./Router/UserRoutes");
const FlowerRoutes =require("./Router/FlowerRoutes")
const cartRoutes=require("./Router/CartRoutes")
const orderRoutes=require("./Router/OrderRoutes")

// Load environment variables from .env file
require("dotenv").config();

const PORT = process.env.PORT || 7000;
// const mongoURI = "mongodb://127.0.0.1:27017/ecomerce";
const mongoURI = process.env.MONGO_URI;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

// important for connect front with back should come before routes
app.use(cors()); // Enable CORS



app.use("/api/users",userRoutes);



app.use("/api/Flower",FlowerRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/charge",orderRoutes);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});



app.get("/", (req, res) => {
  res.send("Hello backend!");
});

app.listen(PORT, () => {
  console.log(`Server is up : http://localhost:${PORT}`);
});

module.exports = app;