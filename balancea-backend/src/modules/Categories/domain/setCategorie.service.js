//Librerias
const validator = require("validator").default
//classes
const clsCategorieConnector = require("../infra/connectors/categorieConnectors")

class setCategorie {
    //Objects
    #objData
    #objResult

    constructor(data) {
        this.#objData = data
    }

    async main() {
        await this.#validations()
        await this.#setCategorie()

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

    async #setCategorie() {
        const dao = new clsCategorieConnector()
        
        const query = await dao.setCategorie({
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

module.exports = setCategorie