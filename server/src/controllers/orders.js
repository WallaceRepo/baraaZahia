/* const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); */

module.exports = {
    getAllActiveOrders: async (req, res, next) => {
        res.json("get all orders works up to controller");
        console.log('controller')
        next()
    },
    createOrder: async (req, res) => {
        res.json("post order works up to controller");
    }

}