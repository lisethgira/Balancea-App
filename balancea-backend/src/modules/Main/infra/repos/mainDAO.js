//Librerias
const { Client } = require("pg")

//Conexion
const connection = require("../../../../common/config/config_connectionPG")

class mainDAO {
    async setUser(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `INSERT INTO public."usuarios"(
                "strName",
                "strLastName",
                "strEmail",
                "strUsername",
                "strPassword"
                ) VALUES ($1, $2, $3, $4, $5) RETURNING *`

            const values = [
                data.strName,
                data.strLastName,
                data.strEmail,
                data.strUsername,
                data.strPassword,
            ]
            
            let response = await client.query(query, values)

            await client.end()

            let result = {
                error: false,
                msg: "El usuario se registro correctamente.",
                data: response.rows[0]
            }

            return result
        } catch (error) {
            let result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setUser de la clase mainDAO",
            };

            return result;
        }
    }

    async validateUser(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `
                SELECT *
                FROM public."usuarios"
                WHERE ("strUsername" = $1)
            `

            const values = [data.strUsername]

            let response = await client.query(query,values)

            await client.end()

            let result = {
                error: false,
                msg: "el usuario se ha logueado correctamente.",
                data: response.rows[0],
            }

            return result
        } catch (error) {
            let result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo validateUser de la clase mainDAO",
            };

            return result;
        }
    }
}

module.exports = mainDAO