const router = require("express").Router();

router.post("/", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text input is required" });
  }
  const mood = "happy"; // Replace with actual AI logic
  res.json({ mood });
});
module.exports = router;
