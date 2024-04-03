//Libreria


//Connectors
const clsCategorieConnector = require("../infra/connectors/categorieConnectors")

const getCategorie = async (objParams) => {
    const { intIdCategorie, intIdUser } = objParams

    if (!intIdUser) {
        throw new Error("faltan parametros de entrada.")
    }

    const dao = new clsCategorieConnector()

    const query = {
        intIdUser,
        intIdCategorie : intIdCategorie || null
    }

    const result = await dao.getCategorie(query)

    if (result.error) {
        throw new Error(result.msg)
    }

    return result
}

module.exports = getCategorie