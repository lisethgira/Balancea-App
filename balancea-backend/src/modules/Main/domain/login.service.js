//Lbreria
const validator = require("validator").default;
const jwt = require("jsonwebtoken")

//Interface
const classInterfaceDAOMain = require("../infra/connectors/mainConnectors")

//service
const serviceGetUser = require("../../Users/domain/getUser.service")

//Functions
const { compare } = require("../app/functions/handleBcrypt")

class Login {
    //Objetc
    #objData
    #objResult
    #objDataUser

    constructor(data){
        this.#objData = data 
    }

    async main(){
        await this.#validations()
        await this.#validateData()

        return this.#objResult
    }

    //Validaciones del microservicio
    async #validations(){
        if (!this.#objData?.strUser && !this.#objData?.strPass){
            throw new Error("Faltan campos requeridos.");
        }

        const queryGetUser = await serviceGetUser({strUser:this.#objData.strUser});

        if (queryGetUser.error) {
            throw new Error(queryGetUser.msg)
        }

        if (!queryGetUser.data) {
            throw new Error("El usuario ingresado no exite.");
        }

        this.#objDataUser = queryGetUser.data
    }

    async #validateData(){
        const checkPassword = await compare(this.#objData.strPass, this.#objDataUser.strPass)

        if (!checkPassword) {
            throw new Error("Contraseña incorrecta")
        }

        const secretKey = process.env.KEY_TOKEN

        const token = jwt.sign({
            ...this.#objDataUser
        },
        secretKey,
        {expiresIn:process.env.TOKEN_EXPIRATION,algorithm: "HS256"})
        
        this.#objResult={
            error: false,
            msg: "El usuario se logueo correctamente.",
            data: token,
        }

    }
}

module.exports = Login