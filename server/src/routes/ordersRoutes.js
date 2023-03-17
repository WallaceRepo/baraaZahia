const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/orders')

// for now, only working on active orders, and not orderhistory
router.get('/orders',  ordersController.getAllActiveOrders)
router.get('/orders/single', ordersController.getAllActiveOrders)



module.exports = router