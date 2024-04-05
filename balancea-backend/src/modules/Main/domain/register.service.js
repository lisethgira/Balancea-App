//Lbreria
const validator = require("validator").default;

//CLient
const supabase = require("../../../common/client/supabaseClient")

//Interface
const classInterfaceDAOMain = require("../infra/connectors/mainConnectors")

//services
const serviceSetUser = require("../../Users/domain/setUser.service")
const serviceGetUser = require("../../Users/domain/getUser.service")

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
        await this.#registerSupabase()
        await this.#register()

        return this.#objResult
    }

    //Validaciones del microservicio
    async #validations() {
        if (!this.#objData?.strUser || !this.#objData?.strEmail || !this.#objData?.strPass) {
            throw new Error("Faltaban parametros de entrada")
        }

        if (!validator.isEmail(this.#objData?.strEmail)) {
            throw new Error("El campo de Usuario contiene un formato no valido debe ser tipo email.");
        }

        const queryGetUserByEmail = await serviceGetUser({
            strEmail: this.#objData?.strEmail
        });

        if (queryGetUserByEmail.error) {
            throw new Error(queryGetUserByEmail.msg)
        }

        if (queryGetUserByEmail.data) {
            throw new Error("El correo ingresado ya existe en nuestra base de datos.");
        }
    }

    async #registerSupabase(){
        const { user, signUpError } = await supabase.auth.signUp({ email: this.#objData?.strEmail, password: this.#objData?.strPass });

        console.log(await supabase.auth.signUp({ email: this.#objData?.strEmail, password: this.#objData?.strPass }))

        if(signUpError){
            throw new Error("Ocurrio un error con sing up de supabase")
        }

        this.#objData = {
            ...this.#objData,
            idSupabase: user?.id
        }
    }

    async #register() {
        const service = new serviceSetUser(this.#objData)

        const query = await service.main()

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