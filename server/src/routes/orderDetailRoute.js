const express = require('express');
const router = express.Router();

const orderDetailController = require('../controllers/orderDetailController')

// Getting all
router.get('/orderDetail', orderDetailController.getAllOrderDetail);

// Getting one
router.get('/orderDetail/:id', 
)

// Creating one
router.post('/orderDetail/', )
 
 // Updating one
router.patch('/orderDetail/:id',

)
// Delete one
router.delete('/orderDetail/:id',
 
)

module.exports = router;