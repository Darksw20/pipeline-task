const express = require('express');
const router = express.Router();

// Función para calcular la comisión
const calcularComision = (monto) => {
    const porcentaje = 0.029;
    const tarifaFija = 0.30;
    return (monto * porcentaje) + tarifaFija;
};

// Ruta POST para crear una transacción
router.post('/fee-transaction', (req, res) => {
    const monto = req.body.monto;
    if (!monto || isNaN(monto)) {
        return res.status(400).json({ error: 'Monto no válido' });
    }

    const comision = calcularComision(monto);
    const totalConComision = monto - comision;

    res.json({
        montoOriginal: monto,
        comision: comision.toFixed(2),
        totalNeto: totalConComision.toFixed(2)
    });
});

module.exports = router;
