const router = require('express').Router();
const transactions = require('./transaction-routes');

router.use('/transactions', transactions);

router.get('/', (req, res) => {
  res.send(`API WORKING`);
});

module.exports = router;
