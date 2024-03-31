//Librerias
const { Client } = require("pg")

//Conexion
const connection = require("../../../../common/config/config_connectionPG")

class accountDAO {
    async setAccount(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `INSERT INTO public."tbl_Account"(
                "intIdUser",
                "strDescription",
                "fltBalance",
                "strIcon"
                ) VALUES ($1, $2, $3, $4) RETURNING *`

            const values = [
                data.intIdUser,
                "Billetera",
                0,
                data.strIcon,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "La cuenta ha sido creada correctamente.",
                data: response.rows[0]
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setAccount de la clase accountDAO",
            };

            return result;
        }
    }

    async updateBalance(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `UPDATE public."tbl_Account"
                SET 
                "fltBalance" = COALESCE($2,"fltBalance"))
            
            WHERE "intId" = $1 RETURNING *`

            const values = [
                data.intIdAccount,
                data.fltBalance,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "La cuenta ha sido actualizada correctamente.",
                data: response.rows[0]
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setAccount de la clase accountDAO",
            };

            return result;
        }
    }
}

module.exports = accountDAO