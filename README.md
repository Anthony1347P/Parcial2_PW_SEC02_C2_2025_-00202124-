# Parcial Practico II

## Descripcion
Backend REST API para gestion de cuentas bancarias.

**Autor:** 00202124/ JAIME ANTONIO PEREZ SHUPAN.

## Instalacion
```bash
npm install
npm start
```

Servidor: `http://localhost:3130`

## Endpoints
```
GET /cuentas                    - Lista todas las cuentas
GET /cuenta/:id                 - Obtiene cuenta por ID
GET /cuentas?name=Maria         - Busca por nombre
GET /cuentas?gender=female      - Busca por genero
GET /cuentasBalance             - Suma balances activos
```

## Pruebas

Enlaces para probar los endpoints:

**Listar todas:**
```
http://localhost:3130/cuentas
```

**Buscar por ID:**
```
http://localhost:3130/cuenta/68f863f8196d296c9e219f27
```

**Buscar por nombre:**
```
http://localhost:3130/cuentas?name=Maria
```

**Buscar por genero:**
```
http://localhost:3130/cuentas?gender=female
```

**Balance total:**
```
http://localhost:3130/cuentasBalance
```

### Resultados esperados

- `/cuentas` → `{count: 10, data: [...]}`
- `/cuenta/:id` → `{finded: true, account: {...}}`
- `/cuentas?name=` → `{finded: true, account: {...}}`
- `/cuentas?gender=` → `{finded: true, data: [...]}`
- `/cuentasBalance` → `{status: true, accountBalance: "$222292.00"}`

## FIN, MUCHAS GRACIAS POR REVISAR.