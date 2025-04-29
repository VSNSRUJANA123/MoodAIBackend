const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const db = require("./config/db.js");
app.get("/", (req, res) => {
  res.send("Mood AI Generator Backend is running!");
});

app.use("/api/moods", require("./routes/moods.js"));
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
