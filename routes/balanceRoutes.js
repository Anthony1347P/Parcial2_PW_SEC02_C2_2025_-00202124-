// Ruta para /cuentasBalance

const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

// GET /cuentasBalance
router.get('/', cuentasController.getCuentasBalance);

module.exports = router;
