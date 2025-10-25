// Funciones para manejar las cuentas

const cuentas = require('../data/cuentas');

// Obtiene el valor numerico del balance
const getBalanceValue = (balance) => {
  return parseFloat(balance.replace('$', '').replace(',', ''));
};

// GET /cuentas - Lista todas las cuentas
const getAllCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

// GET /cuenta/:id 
//  Obtiene cuenta por ID de ruta
const getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find(c => c._id === id);
  
  if (cuenta) {
    res.json({
      finded: true,
      account: cuenta
    });
  } else {
    res.json({
      finded: false,
      account: null
    });
  }
};

// GET /cuentas?queryParam - Busca por ID, nombre o genero
const getCuentasByQuery = (req, res) => {
  const { id, name, gender } = req.query;
  
  // Buscar por ID
  if (id) {
    const cuenta = cuentas.find(c => c._id === id);
    return res.json({
      finded: cuenta ? true : false,
      account: cuenta || null
    });
  }
  
  // Buscar por nombre
  if (name) {
    const cuenta = cuentas.find(c => 
      c.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json({
      finded: cuenta ? true : false,
      account: cuenta || null
    });
  }
  
  // Buscar por genero (este devuelve multiples)
  if (gender) {
    const cuentasFiltradas = cuentas.filter(c => 
      c.gender.toLowerCase() === gender.toLowerCase()
    );
    return res.json({
      finded: cuentasFiltradas.length > 0,
      data: cuentasFiltradas
    });
  }
  
  // Sin parametros validos
  res.status(400).json({
    error: true,
    message: 'Proporciona id, name o gender'
  });
};

// GET /cuentasBalance - Suma balances de cuentas activas
const getCuentasBalance = (req, res) => {
  const cuentasActivas = cuentas.filter(c => c.isActive === true);
  
  if (cuentasActivas.length === 0) {
    return res.json({
      status: false,
      accountBalance: 0
    });
  }
  
  const totalBalance = cuentasActivas.reduce((total, cuenta) => {
    return total + getBalanceValue(cuenta.balance);
  }, 0);
  
  res.json({
    status: true,
    accountBalance: `$${totalBalance.toFixed(2)}`
  });
};

module.exports = {
  getAllCuentas,
  getCuentaById,
  getCuentasByQuery,
  getCuentasBalance
};
