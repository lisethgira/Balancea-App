//ClassDAO
const clsAccountDAO = require("../repos/accountDAO")

class accountConnector {
    async setAccount(data) {
        const dao = new clsAccountDAO()
        const result = await dao.setAccount(data)
        return result
    }

    async updateBalance(data) {
        const dao = new clsAccountDAO()
        const result = await dao.updateBalance(data)
        return result
    }
    
};

module.exports = accountConnector
