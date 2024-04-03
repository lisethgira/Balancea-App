//Libreria


//Connectors
const clsTransactionConnector = require("../infra/connectors/transactionConnectors")

const getTransaction = async (objParams) => {
    const { intIdTransaction, intIdUser } = objParams

    if (!intIdUser) {
        throw new Error("faltan parametros de entrada.")
    }

    const dao = new clsTransactionConnector()

    const query = {
        intIdUser,
        intIdTransaction : intIdTransaction || null
    }

    const result = await dao.getTransaction(query)

    if (result.error) {
        throw new Error(result.msg)
    }

    return result
}

module.exports = getTransaction