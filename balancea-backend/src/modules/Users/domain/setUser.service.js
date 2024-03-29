//liberias
const validator = require("validator").default;

//connectors
const clsUserConnector = require("../infra/connectors/userConnectors")

//functions
const { encrypt } = require("../../Main/app/functions/handleBcrypt")

class setUser {
    //objects
    #objData;
    #objResult;

    //variables
    #strHashPass;


    constructor(data) {
        this.#objData = data
    }

    async main() {
        await this.#validations()
        await this.#encryptPass()
        await this.#setUser()

        return this.#objResult
    }

    async #validations() {
        if (!this.#objData?.strUser || !this.#objData?.strEmail || !this.#objData?.strPass) {
            throw new Error("Faltaban parametros de entrada")
        }

        if (!validator.isEmail(this.#objData.strEmail)) {
            throw new Error("El email contiene un formato invalido")
        }
    }

    async #encryptPass() {
        this.#strHashPass = await encrypt(this.#objData?.strPass)
    }

    async #setUser() {
        const dao = new clsUserConnector()

        const query = await dao.setUser({
            ...this.#objData,
            strPass: this.#strHashPass,
        })

        if (query.error) {
            throw new Error(query.msg)
        }

        this.#objResult = {
            error: false,
            data: query.data,
            msg: "Se creo el usuario correctamente"
        }

    }

}

module.exports = setUser