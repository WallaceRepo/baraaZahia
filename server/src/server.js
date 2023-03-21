'use strict'
const express = require('express');
const app = express()
const PORT = 5000
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const bodyParser = require('body-parser');

const { sequelize, db } = require('../sequelize/models');
const { Manufacturer } = require('../sequelize/models');

app.use(bodyParser.json())
// allow all origins during development
app.use(
  cors({
    origin: '*',
  })
)
// allowing express to read incoming json data
app.use(express.json())
// allowing express to read urlencoded data
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => { res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate') 
next()})

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

async function getManufacturers() {
  const manufacturer = await Manufacturer.findAll();
  return manufacturer;
}

async function getManufacturerByName(name) {
  const manufacturer = await Manufacturer.findOne({ where: { name } });
  return manufacturer;
}

async function init() {
  await assertDatabaseConnectionOk();

  let manufacturer = await getManufacturerByName("Aviation Purchasing Platform");
  console.log(manufacturer);

  manufacturers = await getManufacturers();
  console.log(manufacturers);
}

init();

app.get('/user', async (req, res, next) => {
  try {
    // const model = req.body
    await User.findAll().then((user) => res.json(user))
  } catch (e) {
    console.log(e)
  }
});
app.post('/user', async (req, res, next) => {
  try {
      const model = req.body;
      const result = await User.create({
            first_name: model.firstName,
            last_name: model.lastName,
            email: model.email
         });
         res.json(result.toJSON());
        } catch (e) {
            console.log(e)
        }
});

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

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
