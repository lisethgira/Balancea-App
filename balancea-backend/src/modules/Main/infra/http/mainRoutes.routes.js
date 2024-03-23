const routes = require("express").Router()

//Class
const classController = require("../../app/controllers/mainControllers")

routes.post("/v1/serviceLogin", async (req, res)=>{
    const controllerMain = new classController()
    await controllerMain.serviceLogin(req, res)
})

routes.post("/v1/serviceRegister", async (req, res)=>{
    const controllerMain = new classController()
    await controllerMain.serviceRegister(req, res)
})

routes.get("/balancea/api/v1/authorize", async (req, res)=>{
    const controllerMain = new classController()
    await controllerMain.authorize(req, res)
})

module.exports = routes