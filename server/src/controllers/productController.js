const { Product } = require('../../sequelize/models');
module.exports = {
  getAllProduct: async (req, res ) => {
    try {  
         await Product.findAll().then((products) => res.json(products));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneProduct: async (req, res) => {
      res.send(res.product);
    },
  createProduct: async (req, res) => {
    try {
       await Product.create(req.body).then((product)=> res.status(201).json(product));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateProduct: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.product.set(req.body);
        await result.save().then((product)=>res.status(200).json(product));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteProduct: async (req, res) => {
      try {
        await res.product.destroy()
        res.json({message: "Deleted Product"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisProduct: async(req, res, next) => {
    let product
    try {
         product = await Product.findOne({
            where: {
                sku: req.params.sku
            }
         });
        if(!product) {
           return res.status(404).json({message: "Cannot find a product"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.product = product;
    next();
  }
}