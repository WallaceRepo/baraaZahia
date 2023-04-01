'use strict'
const express = require('express');
const app = express()
const PORT = 5000
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const vendorRoute = require('./routes/vendorRoute');
const productWarehouseRoute = require('./routes/productWarehouseRoute');
const orderDetailRoute = require('./routes/orderDetailRoute')
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


app.use(vendorRoute);
app.use(productWarehouseRoute);
app.use(orderDetailRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

module.exports = app;
