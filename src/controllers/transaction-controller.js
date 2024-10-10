const TransactionModel = require('../model/transaction-model');

class TransactionController {
  //   prueba(req, res) {
  //     res.send(`Controller funcionando`);
  //   }

  //Obtener transacciones
  getTransactions = (req, res) => {
    const { user_id } = req.query;

    if (!user_id) {
      return res.status(400).json({ message: 'User ID es requerido' });
    }

    TransactionModel.findAll({
      where: { user_id: user_id},
      attributes: ['currency', 'amount', 'price_per_unit', 'total_price'],
    })
      .then((transactions) => {
        if (transactions.length === 0) {
          return res.status(404).json({ message: 'No se han encontrado transacciones para este usuario'})
        }
        res.status(200).json(transactions);
      })
      .catch((error) => {
        console.error('Error al obtener transacciones:', error);
        res.status(500).json({ error: 'Error al obtener las transacciones: ' + error.message });
      });
  };

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
