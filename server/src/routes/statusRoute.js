const express = require('express')
const router = express.Router()

const statusController = require('../controllers/statusController')

// Getting all
router.get('/status',)
// Getting one
router.get('/status/:id',)

// Creating one
router.post('status/', )

// Updating one
router.patch('/status/:id', )

// Delete one
router.delete('/status/:id')
module.exports = router