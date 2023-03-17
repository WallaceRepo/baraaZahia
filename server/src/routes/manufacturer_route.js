const express = require('express')
const router = express.Router()

const manufacturerController = require('../controllers/manufacturer')

// Getting all
router.get('/manufacturers', manufacturerController.getAllManufacturer)

// Getting one
router.get('/manufacturers/:id', (req, res)=> {
    res.send("one manufacturere")
})
// Creating one
router.post('/manufacturers/', (req,res)=>{
   res.send("added one manufacturer")
})
 // Updating one
router.patch('/manufacturers/',(req,res)=>{
   res.send("updated one manufactuere")
})
// Delete one
router.delete('/manufacturers/:id', (req,res)=>{
   res.send("deleted a manufacturer")
})

module.exports = router