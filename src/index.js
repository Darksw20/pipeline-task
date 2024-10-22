const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

// Endpoint para convertir BTC a USD/EUR/GBP
app.post("/convert", async (req, res) => {
  const { amount, currency, user_id } = req.body;

  if (!amount || !currency) {
    return res.status(400).json({ error: "Amount and currency are required." });
  }

	console.log("Llega peticion");
	console.log(req);

  try {
    // Llamar a la API de CoinDesk usando la URL desde el archivo .env
    const response = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`);
    
    const rate = response.data.bpi[currency].rate_float;
    const btc_amount = amount * rate;

    const taxComputationIP = "54.165.107.93:3000/fee-transaction";

    const callbackResponse = await axios.post(`http://${taxComputationIP}`, {
      amount:btc_amount,
      currency,
      user_id
    });
    console.log("regresa");
    const res1 = callbackResponse;
    console.log(res1);

    return res.json({
	    message: "Trancascción Creada Exitosamente",
	    transactionData: callbackResponse.data
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "An error occurred while fetching data." });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

