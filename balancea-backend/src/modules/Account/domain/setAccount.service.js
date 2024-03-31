//Librerias
const validator = require("validator").default
//classes
const clsAccountConnector = require("../infra/connectors/accountConnectors")

class setAccount {
    //Objects
    #objData
    #objResult

    constructor(data) {
        this.#objData = data
    }

    async main() {
        await this.#validations()
        await this.#setAccount()

        return this.#objResult
    }

    async #validations() {
        if (!this.#objData?.intIdUser) {
            throw new Error("Faltan parametros de entrada.")
        }

        if (!validator.isInt(this.#objData.intIdUser)) {
            throw new Error("El formato del identificador del usuario es incorrecto.")
        }
    }

    async #setAccount() {
        const dao = new clsAccountConnector()
        
        const query = await dao.setAccount({
            intIdUser: this.#objData?.intIdUser,
            strIcon: this.#objData?.strIcon
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

module.exports = setAccount