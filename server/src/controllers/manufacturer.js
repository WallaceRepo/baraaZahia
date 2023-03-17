/* const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); */

module.exports = {
    getAllManufacturer: async (req, res) => {
        res.json("get orders works up to controller");
        
    },
    createManufacturer: async (req, res) => {
        res.json("post order works up to controller");
    },
    deleteManufacturer: async (req, res) => {
        res.json("post order works up to controller");
    },
    updateManufacturer: async (req, res) => {
        res.json("post order works up to controller");
    }

}