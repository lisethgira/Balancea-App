//Librerias
const { Client } = require("pg")

//Conexion
const connection = require("../../../../common/config/config_connectionPG")

class userDAO {
    async setUser(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `INSERT INTO public."tbl_Users"(
                "strUserNames",
                "strPass",
                "strEmail",
                "idAuth_supabase"
                ) VALUES ($1, $2, $3, $4) RETURNING *`

            const values = [
                data.strUser,
                data.strPass,
                data.strEmail,
                data.idSupabase,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "El usuario se registro correctamente.",
                data: response.rows[0]
            }

            return result
        } catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setPerson de la clase daoPersons",
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
                FROM public."tbl_Users"
                WHERE ("strUserNames" = $1)
            `

            const values = [data.strUser]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "el usuario se ha logueado correctamente.",
                data: response.rows[0],
            }

            return result
        } catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo validateUser de la clase daoAuth",
            };

            return result;
        }
    }

    async getUser(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `
                SELECT *
                FROM public."tbl_Users"
                WHERE ("strEmail" = $1)
            `

            const values = [
                data.strEmail
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "el usuario se ha logueado correctamente.",
                data: response.rows[0],
            }

            return result
        } catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo validateUser de la clase daoAuth",
            };

            return result;
        }
    }

}

module.exports = userDAO