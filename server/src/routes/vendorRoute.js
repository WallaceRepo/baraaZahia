const express = require('express');
const router = express.Router();

const vendorController = require('../controllers/vendorController')

// Getting all
router.get('/vendors', vendorController.getAllVendors);

// Getting one
router.get('/vendors/:id', 
vendorController.getThisVendor,
vendorController.getOneVendor)

// Creating one
router.post('/vendors/', vendorController.createVendor)
 
 // Updating one
router.patch('/vendors/:id',
   vendorController.getThisVendor,
   vendorController.updateVendor
)
// Delete one
router.delete('/vendors/:id',
   vendorController.getThisVendor,
   vendorController.deleteVendor
)

module.exports = router;