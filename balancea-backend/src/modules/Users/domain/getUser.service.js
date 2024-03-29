//Librerias
const validator = require("validator").default;

//connectos
const clsUserConnector = require("../infra/connectors/userConnectors")

const getUser = async (objParams, strDataUser) => {
    const { strUser, strEmail } = objParams;

    if (strEmail) {
        if (!validator.isEmail(strEmail)) {
            throw new Error("El correo enviado es invalido")
        }
    }

    const dao = new clsUserConnector()

    const query = {
        strUser: strUser,
        strEmail: strEmail,
    }

    const result = await dao.getUser(query)

    if (result.error) {
        throw new Error(result.msg)
    }
    return result

};

module.exports = getUser;