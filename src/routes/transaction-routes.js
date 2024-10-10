const router = require('express').Router();
const transactionController = require('../controllers/transaction-controller');

// router.get('/prueba', transactionController.prueba);

//Historial de transacciones.
router.get('/', transactionController.getTransactions);

router.post('/', transactionController.createTransaction);

module.exports = router;
