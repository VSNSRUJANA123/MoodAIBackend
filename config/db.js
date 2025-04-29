const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbUrl = mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

module.exports = dbUrl;
