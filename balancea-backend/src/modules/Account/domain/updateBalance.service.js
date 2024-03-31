//Librerias
const validator = require("validator").default
//classes
const clsAccountConnector = require("../infra/connectors/accountConnectors")

class updateBalance {
    //Objects
    #objData
    #objResult

    constructor(data) {
        this.#objData = data
    }

    async main() {
        await this.#validations()
        await this.#updateBalance()

        return this.#objResult
    }

    async #validations() {
        if (!this.#objData?.intIdAccount || !this.#objData?.fltBalance) {
            throw new Error("Faltan parametros de entrada.")
        }

        if (!validator.isInt(this.#objData.intIdAccount)) {
            throw new Error("El formato del identificador de la cuenta es incorrecto.")
        }

        if (!validator.isFloat(this.#objData.fltBalance)) {
            throw new Error("El monto ingresado es invalido.")
        }
    }

    async #updateBalance() {
        const dao = new clsAccountConnector()
        
        const query = await dao.updateBalance({
            intIdAccount: this.#objData?.intIdAccount,
            fltBalance: this.#objData?.fltBalance
        })

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

module.exports = updateBalance