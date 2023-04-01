const { ProductWarehouse, Product } = require('../../sequelize/models');

module.exports = {
  getAllProductWarehouse: async (req, res ) => {
    try {  
         await  ProductWarehouse.findAll({
         // include: Product,
         attributes: ['sku', 'warehouse', 'on_hand', 'safety_stock', 'min_stock_qty', 'max_stock_qty', 'sales_velocity', 'reorder_rules', 'out_of_stock_detail']
         }).then((productWarehouses) => res.json(productWarehouses));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneProductWarehouse: async (req, res) => {
      res.send(res.productWarehouse);
    },
  createProductWarehouse: async (req, res) => {
    try {
       await ProductWarehouse.create(req.body).then((productWarehouse)=> res.status(201).json(productWarehouse));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateProductWarehouse: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.productWarehouse.set(req.body);
        await result.save().then((productWarehouse)=>res.status(200).json(productWarehouse));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteProductWarehouse: async (req, res) => {
      try {
        await res.productWarehouse.destroy()
        res.json({message: "Deleted ProductWarehouse"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisProductWarehouse: async(req, res, next) => {
    let productWarehouse
    try {
         productWarehouse = await ProductWarehouse.findOne({
            where: {
                sku: req.params.sku,
                
            }
         });
        if(!productWarehouse) {
           return res.status(404).json({message: "Cannot find a productWarehouse"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.productWarehouse = productWarehouse;
    next();
  }
}