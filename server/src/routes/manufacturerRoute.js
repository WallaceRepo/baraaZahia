const express = require('express');
const router = express.Router();

const manufacturerController = require('../controllers/manufacturerController')

// Getting all
router.get('/manufacturers', manufacturerController.getAllManufacturer);

// Getting one
router.get('/manufacturers/:id', 
manufacturerController.getThisManufacturer,
manufacturerController.getOneManufacturer)

// Creating one
router.post('/manufacturers/',manufacturerController.createManufacturer)
 
 // Updating one
router.patch('/manufacturers/:id',
   manufacturerController.getThisManufacturer,
   manufacturerController.updateManufacturer
)
// Delete one
router.delete('/manufacturers/:id',
   manufacturerController.getThisManufacturer,
   manufacturerController.deleteManufacturer
)

module.exports = router;