const { Payment } = require('../../sequelize/models');
module.exports = {
  getAllPayment: async (req, res ) => {
    try {
         await Payment.findAll().then((payments) => res.json(payments));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOnePayment: async (req, res) => {
      res.send(res.payment);
    },
  createPayment: async (req, res) => {
    try {
       await Payment.create(req.body).then((payment)=> res.status(201).json(payment));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updatePayment: async (req, res) => {
    if(!req.body || req.params.bill === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.payment.set(req.body);
        await result.save().then((payment)=>res.status(200).json(payment));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deletePayment: async (req, res) => {
      try {
        await res.payment.destroy()
        res.json({message: "Deleted Payment"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisPayment: async(req, res, next) => {
    let payment
    try {
         payment = await Payment.findOne({
            where: {
                bill_number: req.params.bill
            }
         });
        if(!payment) {
           return res.status(404).json({message: "Cannot find a payment"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.payment = payment;
    next();
  }
}