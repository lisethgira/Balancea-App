const classDao = require("../repos/userDAO")

class userConnectors{
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
    
    async getUser(data){
        const dao = new classDao()
        const res = await dao.getUser(data)
        return res
    }
}

module.exports = userConnectors