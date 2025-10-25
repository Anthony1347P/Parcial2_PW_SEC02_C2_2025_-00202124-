// Rutas para el recurso /cuentas

const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');


router.get('/', (req, res) => {
  if (Object.keys(req.query).length > 0) {
    cuentasController.getCuentasByQuery(req, res);
  } else {
    cuentasController.getAllCuentas(req, res);
  }
});


router.get('/:id', cuentasController.getCuentaById);

module.exports = router;
