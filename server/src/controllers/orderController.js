const { Order } = require('../../sequelize/models');
module.exports = {
  getAllOrder: async (req, res ) => {
    try {
         await Order.findAll().then((orders) => res.json(orders));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneOrder: async (req, res) => {
      res.send(res.order);
    },
  createOrder: async (req, res) => {
    try {
       await Order.create(req.body).then((order)=> res.status(201).json(order));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateOrder: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.order.set(req.body);
        await result.save().then((order)=>res.status(200).json(order));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteOrder: async (req, res) => {
      try {
        await res.order.destroy()
        res.json({message: "Deleted Order"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisOrder: async(req, res, next) => {
    let order
    try {
         order = await Order.findOne({
            where: {
                id: req.params.id
            }
         });
        if(!order) {
           return res.status(404).json({message: "Cannot find a order"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.order = order;
    next();
  }
}