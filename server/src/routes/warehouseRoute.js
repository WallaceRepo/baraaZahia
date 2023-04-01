const express = require('express')
const router = express.Router()

const warehouseController = require('../controllers/warehouseController')

// Getting all
router.get('/warehouses',)
// Getting one
router.get('/warehouses/:id',)

// Creating one
router.post('warehouses/', )

// Updating one
router.patch('/warehouses/:id', )

// Delete one
router.delete('/warehouses/:id', )

module.exports = router