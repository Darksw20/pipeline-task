const TransactionModel = require('../model/transaction-model');

class TransactionController {
  //   prueba(req, res) {
  //     res.send(`Controller funcionando`);
  //   }

  getTransactions(req, res) {}

  createTransaction = (req, res) => {
    const { user_id, currency, amount, price_per_unit, total_price } = req.body;

    TransactionModel.create({
      user_id,
      currency,
      amount,
      price_per_unit,
      total_price,
    })
      .then((newTransaction) => {
        res.status(201).json(newTransaction);
      })
      .catch((error) => {
        console.error('Error creating the transaction:', error); // Agrega un log del error
        res.status(500).json({ error: 'Error creating the transaction: ' + error.message });
      });
  };
}

module.exports = new TransactionController();
