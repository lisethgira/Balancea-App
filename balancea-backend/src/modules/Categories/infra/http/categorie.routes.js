const routes = require("express").Router()

//Class
const classController = require("../../app/controllers/categorieControllers")

routes.post("/v1/setCategorie", async (req, res)=>{
    const controllerCategorie = new classController()
    await controllerCategorie.setCategorie(req, res)
})

routes.put("/v1/updateCategorie", async (req, res)=>{
    const controllerCategorie = new classController()
    await controllerCategorie.updateCategorie(req, res)
})

routes.get("/v1/getCategorie", async (req, res)=>{
    const controllerCategorie = new classController()
    await controllerCategorie.getCategorie(req, res)
})

module.exports = routes