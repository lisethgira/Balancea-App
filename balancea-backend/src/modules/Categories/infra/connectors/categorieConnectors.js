//ClassDAO
const clsCategorieDAO = require("../repos/categorieDAO")

class categorieConnector {
    async setCategorie(data) {
        const dao = new clsCategorieDAO()
        const result = await dao.setCategorie(data)
        return result
    }

    async updateCategorie(data) {
        const dao = new clsCategorieDAO()
        const result = await dao.updateCategorie(data)
        return result
    }

    async getCategorie(data) {
        const dao = new clsCategorieDAO()
        const result = await dao.getCategorie(data)
        return result
    }
    
};

module.exports = categorieConnector
