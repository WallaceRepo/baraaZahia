const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/categoryController')

// Getting all
router.get('/categories',)
// Getting one
router.get('/categories/:id',)

// Creating one
router.post('categories/', )

// Updating one
router.patch('/categories/:id', )

// Delete one
router.delete('/categories/:id', )


module.exports = router