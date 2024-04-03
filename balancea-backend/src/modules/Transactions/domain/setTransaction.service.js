//Librerias
const validator = require("validator").default
//classes
const clsTransactionConnector = require("../infra/connectors/transactionConnectors")

class setTransaction {
    //Objects
    #objData
    #objResult

    constructor(data) {
        this.#objData = data
    }

    async main() {
        await this.#validations()
        await this.#setTransaction()

        return this.#objResult
    }

    async #validations() {
        if (!this.#objData?.intIdAccount && ! this.#objData?.intIdCategorie) {
            throw new Error("Faltan parametros de entrada.")
        }

        if (!validator.isInt(this.#objData.intIdUser)) {
            throw new Error("El formato del identificador del usuario es incorrecto.")
        }
    }

    async #setTransaction() {
        const dao = new clsTransactionConnector()
        
        const query = await dao.setTransaction(this.#objData)

        if (query.error) {
            throw new Error(query.msg)
        }

        this.#objResult = {
            error: query.error,
            data: query.data,
            msg: query.msg
        }
    }

}

module.exports = setTransaction