const express = require('express');
const router = express.Router();

const productWarehouseController = require('../controllers/productWarehouseController')

// Getting all
router.get('/productWarehouse', productWarehouseController.getAllProductWarehouse);

// Getting one
router.get('/productWarehouse/:id', 
)

// Creating one
router.post('/productWarehouse/', )
 
 // Updating one
router.patch('/productWarehouse/:id',

)
// Delete one
router.delete('/productWarehouse/:id',
 
)

module.exports = router;