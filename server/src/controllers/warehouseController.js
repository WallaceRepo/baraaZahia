const { Warehouse } = require('../../sequelize/models');
module.exports = {
  getAllWarehousewarehouse: async (req, res ) => {
    try {
         await Warehouse.findAll().then((warehouses) => res.json(warehouses));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneWarehouse: async (req, res) => {
      res.send(res.warehouse);
    },
  createWarehouse: async (req, res) => {
    try {
       await Warehouse.create(req.body).then((warehouse)=> res.status(201).json(warehouse));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateWarehouse: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.warehouse.set(req.body);
        await result.save().then((warehouse)=>res.status(200).json(warehouse));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteWarehouse: async (req, res) => {
      try {
        await res.warehouse.destroy()
        res.json({message: "Deleted Warehouse"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisWarehouse: async(req, res, next) => {
    let warehouse
    try {
         warehouse = await Warehouse.findOne({
            where: {
                warehouse_name: req.params.warehouse_name
            }
         });
        if(!warehouse) {
           return res.status(404).json({message: "Cannot find a warehouse"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.warehouse = warehouse;
    next();
  }
}