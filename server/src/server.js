'use strict'
const express = require('express');
const app = express()
const PORT = 5000
//require('dotenv').config({ path: './config/.env' })
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const bodyParser = require('body-parser');

const { User, sequelize, db } = require('../sequelize/models');



// const inventoryRoutes = require('./routes/inventoryRoutes')
// const ordersRoutes = require('./routes/ordersRoutes')

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



async function connectToPostgres() {
  console.log('Checking database connection...')
   try {
    await sequelize.authenticate()
    console.log('Database connection established.')
    //return sequelize;
    console.log(db)
  } catch (e) {
    console.log('Database connection failed', e)
    process.exit(1)
  }
}
(async () => {
   const result = await connectToPostgres()
   console.log(result)
   //console.log(postgresClient)
   //config.postgres.client = postgresClient
   
   console.log(`Attempting to run server on port ${PORT}`)
 
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})()

// app.post('/user', async (req, res, next) => {
//   try {
//     const model = req.body
//     await User.create({
//       name: model.name,
//     }).then((user) => res.json(user))
//   } catch (e) {
//     console.log(e)
//   }
// })

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

// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
