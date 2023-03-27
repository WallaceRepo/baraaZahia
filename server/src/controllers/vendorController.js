const { Vendor } = require('../../sequelize/models');
module.exports = {
  getAllVendors: async (req, res ) => {
    try {
         await Vendor.findAll().then((vendors) => res.json(vendors));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneVendor: async (req, res) => {
      res.send(res.vendor.company);
    },
  createVendor: async (req, res) => {
    try {
       await Vendor.create(req.body).then((vendor)=> res.status(201).json(vendor));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateVendor: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.vendor.set(req.body);
        await result.save().then((vendor)=>res.status(200).json(vendor));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteVendor: async (req, res) => {
      try {
        await res.vendor.destroy()
        res.json({message: "Deleted Vendor"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisVendor: async(req, res, next) => {
    let vendor
    try {
         vendor = await Vendor.findOne({
            where: {
                id: req.params.id
            }
         });
        if(!vendor) {
           return res.status(404).json({message: "Cannot find a vendor"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.vendor = vendor;
    next();
  }
}