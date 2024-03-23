//Lbreria
const validator = require("validator").default;

//Interface
const classInterfaceDAOMain = require("../infra/connectors/mainConnectors")

//Functions
const { encrypt } = require("../app/functions/handleBcrypt")

class Register {
    //Objetc
    #objData
    #objResult

    //Variable
    
    constructor(data) {
        this.#objData = data
    }

    async main() {
        await this.#validations()
        await this.#setUser()

        return this.#objResult
    }

    //Validaciones del microservicio
    async #validations() {
        const dao = new classInterfaceDAOMain()

        if (!this.#objData) {
            throw new Error("Faltan campos requeridos.");
        }

        if (!validator.isEmail(this.#objData?.strUsername)) {
            throw new Error("El campo de Usuario contiene un formato no valido debe ser tipo email.");
        }

        const queryGetUser = await dao.validateUser({
            strUsername: this.#objData.strUsername
        });

        if (queryGetUser.error) {
            throw new Error(queryGetUser.msg)
        }

        if (queryGetUser.data) {
            throw new Error("El correo ingresado ya existe en nuestra base de datos.");
        }
    }

    async #setUser() {
        const dao = new classInterfaceDAOMain()

        const hash = await encrypt(this.#objData.strPassword)

        const query = await dao.setUser({
            ...this.#objData,
            strPassword: hash,
        })

        if (query.error) {
            throw new Error(query.msg)
        }

        this.#objResult = {
            error: query.error,
            msg: query.msg,
            data: query.data
        }
    }
}

module.exports = Register