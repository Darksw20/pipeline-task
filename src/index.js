const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

// Endpoint para convertir BTC a USD/EUR/GBP
app.post("/convert", async (req, res) => {
  const { amount, currency } = req.body;

  if (!amount || !currency) {
    return res.status(400).json({ error: "Amount and currency are required." });
  }

  try {
    // Llamar a la API de CoinDesk usando la URL desde el archivo .env
    const response = await axios.get(`${process.env.API_URL}/${currency}.json`);
    
    const rate = response.data.bpi[currency].rate_float;
    const convertedAmount = amount * rate;

    res.json({
      amount,
      currency,
      convertedAmount,
      rate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

