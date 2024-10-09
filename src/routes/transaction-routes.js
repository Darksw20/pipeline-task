const router = require('express').Router();
const transactionController = require('../controllers/transaction-controller');

// router.get('/prueba', transactionController.prueba);

router.get('/', (req, res) => {
  res.send(`Transaction get`);
});

router.post('/', transactionController.createTransaction);

module.exports = router;
