/* const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); */

module.exports = {
    getAllInventoryItems: async (req, res, next) => {
        res.json("get inventory works up to contoller");
        next()
    },
    getSingleItem: async (req, res, next) => {
        res.json("get single item works up to controller");
        next()
    },
    createItem: async (req, res, next) => {
        res.json("post item works up to controller");
        next()
    }
}