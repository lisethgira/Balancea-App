const routes = require("express").Router()

//Class
const classController = require("../../app/controllers/transactionControllers")

routes.post("/v1/setTransaction", async (req, res)=>{
    const controllerTransaction = new classController()
    await controllerTransaction.setTransaction(req, res)
})

routes.put("/v1/updateTransaction", async (req, res)=>{
    const controllerTransaction = new classController()
    await controllerTransaction.updateTransaction(req, res)
})

routes.get("/v1/getTransaction", async (req, res)=>{
    const controllerTransaction = new classController()
    await controllerTransaction.getTransaction(req, res)
})

module.exports = routes