'use strict'
const express = require('express');
const app = express()
const PORT = 5000
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//const manufacturer = require('../sequelize/models/manufacturer');
const manufacturerRoute = require('./routes/manufacturerRoute')
// const { sequelize } = require('../sequelize/models');
//const { Manufacturer } = require('../sequelize/models');

app.use(morgan('combined'));
app.use(bodyParser.json());
// allow all origins during development
app.use(
  cors({
    origin: '*',
  })
)
// allowing express to read incoming json data
app.use(express.json())

app.use(bodyParser.urlencoded({extended: true }));

// allowing express to read urlencoded data
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => { res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate') 
next()})

// async function assertDatabaseConnectionOk() {
//   console.log(`Checking database connection...`);
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//     process.exit(1);
//   }
// }

// async function getManufacturers() {
//   const manufacturers = await Manufacturer.findAll();
//   return manufacturers;
// }

// async function getManufacturerByName(company) {
//   const manufacturer = await Manufacturer.findOne({ where: { company } });
//   return manufacturer;
// }

// async function init() {
//   // await assertDatabaseConnectionOk();

//   let manufacturer = await getManufacturerByName("Aviation Purchasing Platform");
//   console.log(manufacturer);

//   const manufacturers = await getManufacturers();
//   console.log(manufacturers);
// }

// init();

// app.get('/manufacturers', async (req, res, next) => {
//   try {
//      await Manufacturer.findAll().then((manufacturers) => res.json(manufacturers))
//   } catch (e) {
//     console.log(e)
//   }
// });
// app.post('/manufacturers', async (req, res, next) => {
//   //res.send('Success')
//   try {
//       // const model = req.body;
//       await Manufacturer.create(
//         // {
//             // first_name: model.firstName,
//             // last_name: model.lastName,
//             // email: model.email,
//            req.body
//         //  }
//          )
//          .then((manufacturers) => res.json(manufacturers))
//         } catch (e) {
//             console.log(e)
//         }
// });

// Endpoint to get json mockdata
// app.get('/', (req, res) => {
//   fs.readFile('./src/data.json', (err, data) => {
//     if (err) {
//       res.status(500).send(`Error reading data files ${err}`)
//     } else {
//       const jsonData = JSON.parse(data)
//       res.json(jsonData)
//     }
//   })
// })

// app.use('/', inventoryRoutes)
// app.use('/orders', ordersRoutes)
// app.use('/orders/single', ordersRoutes)

//app.use('/manufacturers', manufacturerRoute);
app.get('/manufacturers', manufacturerRoute);
app.get('/manufacturers/:id', manufacturerRoute);
app.delete('/manufacturers/:id', manufacturerRoute);
app.post('/manufacturers', manufacturerRoute);
app.patch('/manufacturers/:id', manufacturerRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

module.exports = app;
