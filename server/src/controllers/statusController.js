const { Status_lookup } = require('../../sequelize/models');
module.exports = {
  getAllStatusstatus: async (req, res ) => {
    try {
         await Status_lookup.findAll().then((statuses) => res.json(statuses));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneStatus: async (req, res) => {
      res.send(res.status);
    },
  createStatus: async (req, res) => {
    try {
       await Status_lookup.create(req.body).then((status)=> res.status(201).json(status));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateStatus: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.status.set(req.body);
        await result.save().then((status)=>res.status(200).json(status));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteStatus: async (req, res) => {
      try {
        await res.status.destroy()
        res.json({message: "Deleted Status_lookup"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisStatus: async(req, res, next) => {
    let status
    try {
         status = await Status_lookup.findOne({
            where: {
                name: req.params.name
            }
         });
        if(!status) {
           return res.status(404).json({message: "Cannot find a status"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.status = status;
    next();
  }
}