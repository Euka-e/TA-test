const axios = require("axios");
const express = require("express");
require("dotenv").config();

server = express();

const PORT = process.env.PORT || 3000;
const API = process.env.API;

server.get("/soyTA", async (req, res) => {
  try {
    const response = await axios.get(API);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Algo salió mal" });
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
