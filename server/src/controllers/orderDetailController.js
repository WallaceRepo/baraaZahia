const { OrderDetail } = require('../../sequelize/models');
module.exports = {
  getAllOrderDetail: async (req, res ) => {
    try {
         await OrderDetail.findAll(
          
         ).then((orderdetails) => res.json(orderdetails));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneOrderDetail: async (req, res) => {
      res.send(res.orderDetail);
    },
  createOrderDetail: async (req, res) => {
    try {
       await OrderDetail.create(req.body).then((orderDetail)=> res.status(201).json(orderDetail));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateOrderDetail: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.orderDetail.set(req.body);
        await result.save().then((orderDetail)=>res.status(200).json(orderDetail));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteOrderDetail: async (req, res) => {
      try {
        await res.order.destroy()
        res.json({message: "Deleted OrderDetail"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisOrderDetail: async(req, res, next) => {
    let orderDetail
    try {
         orderDetail = await OrderDetail.findOne({
            where: {
                id: req.params.id
            }
         });
        if(!orderDetail) {
           return res.status(404).json({message: "Cannot find a orderDetail"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.orderDetail = orderDetail;
    next();
  }
}