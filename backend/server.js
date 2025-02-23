const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); // Allow all origins

app.get("/api/quote", async (req, res) => {
  try {
    const response = await axios.get("https://animechan.io/api/v1/quotes/random");
    res.json(response.data); // Send the response directly to the frontend
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
