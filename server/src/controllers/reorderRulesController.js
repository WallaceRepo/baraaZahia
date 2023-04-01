const { ReOrder_rules } = require('../../sequelize/models');
module.exports = {
  getAllReOrderreorder: async (req, res ) => {
    try {
         await ReOrder_rules.findAll().then((reorders) => res.json(reorders));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneReOrder: async (req, res) => {
      res.send(res.reorder);
    },
  createReOrder: async (req, res) => {
    try {
       await ReOrder_rules.create(req.body).then((reorder)=> res.status(201).json(reorder));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateReOrder: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.reorder.set(req.body);
        await result.save().then((reorder)=>res.status(200).json(reorder));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteReOrder: async (req, res) => {
      try {
        await res.reorder.destroy()
        res.json({message: "Deleted ReOrder"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisReOrder: async(req, res, next) => {
    let reorder
    try {
         reorder = await ReOrder_rules.findOne({
            where: {
                id: req.params.id
            }
         });
        if(!reorder) {
           return res.status(404).json({message: "Cannot find a reorder"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.reorder = reorder;
    next();
  }
}