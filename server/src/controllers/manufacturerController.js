const { Manufacturer } = require('../../sequelize/models');
module.exports = {
  getAllManufacturer: async (req, res ) => {
    try {
         await Manufacturer.findAll().then((manufacturers) => res.json(manufacturers));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneManufacturer: async (req, res) => {
      res.send(res.manufacturer.company);
    },
  createManufacturer: async (req, res) => {
    try {
       await Manufacturer.create(req.body).then((manufacturer)=> res.status(201).json(manufacturer));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateManufacturer: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.manufacturer.set(req.body);
        await result.save().then((manufacturer)=>res.status(200).json(manufacturer));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteManufacturer: async (req, res) => {
      try {
        await res.manufacturer.destroy()
        res.json({message: "Deleted Manufacturer"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisManufacturer: async(req, res, next) => {
    let manufacturer
    try {
         manufacturer = await Manufacturer.findOne({
            where: {
                id: req.params.id
            }
         });
        if(!manufacturer) {
           return res.status(404).json({message: "Cannot find manufacturer"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.manufacturer = manufacturer;
    next();
  }

}