// Servidor principal

const express = require('express');
const app = express();
const PORT = 3130;

// Importar rutas
const cuentasRoutes = require('./routes/cuentasRoutes');
const balanceRoutes = require('./routes/balanceRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Documentacion de la API
app.get('/', (req, res) => {
  res.json({
    message: "Parcial Practico II_API de Gestion de Cuentas",
    student: "00202124 JAIME ANTONIO PEREZ SHUPAN",
    endpoints: {

      getAllCuentas: {
        method: "GET",
        path: "/cuentas",
        description: "Lista todas las cuentas disponibles",
        response: {
          count: "Numero de cuentas",
          data: "Array de cuentas"
        }
      },
      getCuentaById: {
        method: "GET",
        path: "/cuenta/:id",
        description: "Obtiene una cuenta especifica por su ID",
        example: "/cuenta/68f863f8196d296c9e219f27",
        response: {
          finded: "true | false",
          account: "Objeto de cuenta o null"
        }
      },
      getCuentasByQuery: {
        method: "GET",
        path: "/cuentas?{queryParam}",
        description: "Busca cuentas por ID, nombre o genero",
        examples: [
          "/cuentas?id=68f863f8196d296c9e219f27",
          "/cuentas?name=Maria",
          "/cuentas?gender=female"
        ],
        response: {
          finded: "true/false",
          account: "Objeto de cuenta (busqueda por id o name)",
          data: "Array de cuentas (busqueda por gender)"
        }
      },
      getCuentasBalance: {
        method: "GET",
        path: "/cuentasBalance",
        description: "Obtiene la suma total de balances de cuentas activas",
        response: {
          status: "true | false",
          accountBalance: "Suma total de balances"
        }
      }
    },
    dateTime: new Date().toLocaleString('es-ES', { timeZone: 'America/El_Salvador' })
  });
});

// Rutas
app.use('/cuentas', cuentasRoutes);
app.use('/cuenta', cuentasRoutes);
app.use('/cuentasBalance', balanceRoutes);

// Error 404
app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: 'Endpoint no encontrado',
    availableEndpoints: [
      'GET /',
      'GET /cuentas',
      'GET /cuenta/:id',
      'GET /cuentas?queryParam=valor',
      'GET /cuentasBalance'
    ]
  });
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`

   Servidor Backend Iniciado Exitosamente     

   Puerto: ${PORT}                               
   URL: http://localhost:${PORT}    

   Endpoints Disponibles:                    
  - GET /                                      
  - GET /cuentas                               
  - GET /cuenta/:id                            
  - GET /cuentas?queryParam=valor              
  - GET /cuentasBalance                        

  `);
});
