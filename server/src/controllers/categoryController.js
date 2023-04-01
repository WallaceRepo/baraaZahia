const { Category } = require('../../sequelize/models');
module.exports = {
  getAllCategory: async (req, res ) => {
    try {
         await Category.findAll().then((categories) => res.json(categories));
        } catch(error){
          res.status(500).json({message: error.message });
        }
    },
  getOneCategory: async (req, res) => {
      res.send(res.category.category);
    },
  createCategory: async (req, res) => {
    try {
       await Category.create(req.body).then((category)=> res.status(201).json(category));
    } catch(error){
       res.status(400).json({ message:error.message });
    }
    },
  updateCategory: async (req, res) => {
    if(!req.body || req.params.id === null) {
            return res.status(404).json({message: "update request needs body"})
       }
    try {
        const result = await res.category.set(req.body);
        await result.save().then((category)=>res.status(200).json(category));
    } catch(error){
      res.status(400).json({message:error.message})
    }
   },
  deleteCategory: async (req, res) => {
      try {
        await res.category.destroy()
        res.json({message: "Deleted Category"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
    },

  getThisCategory: async(req, res, next) => {
    let category
    try {
         category = await Category.findOne({
            where: {
                category: req.params.category
            }
         });
        if(!category) {
           return res.status(404).json({message: "Cannot find a category"})
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
    res.category = category;
    next();
  }
}