const classDao = require("../repos/mainDAO")

class mainConnectors{
    async setUser(data){
        const dao = new classDao()
        const res = await dao.setUser(data)
        return res
    }

    async validateUser(data){
        const dao = new classDao()
        const res = await dao.validateUser(data)
        return res
    }
}

module.exports = mainConnectors