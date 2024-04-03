//ClassDAO
const clsTransactionDAO = require("../repos/transactionDAO")

class transactionConnector {
    async setTransaction(data) {
        const dao = new clsTransactionDAO()
        const result = await dao.setTransaction(data)
        return result
    }

    async updateTransaction(data) {
        const dao = new clsTransactionDAO()
        const result = await dao.updateTransaction(data)
        return result
    }

    async getTransaction(data) {
        const dao = new clsTransactionDAO()
        const result = await dao.getTransaction(data)
        return result
    }
    
};

module.exports = transactionConnector
