//Librerias
const { Client } = require("pg")

//Conexion
const connection = require("../../../../common/config/config_connectionPG")

class TransactionDAO {
    async setTransaction(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `INSERT INTO public."tbl_Transactions"(
                "intIdAccount", 
                "intIdCategorie", 
                "strDescription", 
                "dtmCreationDate", 
                "dlbAmount", 
                "strEstate"
                ) VALUES ($1, $2, $3, NOW(), $4, $5) RETURNING *`

            const values = [
                data.intIdAccount,
                data.intIdCategorie,
                data.strDescription,
                data.dlbAmount,
                data.strEstate,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "La transacción ha sido creada correctamente.",
                data: response.rows[0]
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setTransaction de la clase TransactionDAO",
            };

            return result;
        }
    }

    async updateTransaction(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `UPDATE public."tbl_Categories"
                SET 
                "intIdCategorie" = COALESCE($2,"intIdCategorie")),
                "strDescription" = COALESCE($3,"strDescription")),
                "dlbAmount" = COALESCE($4,"dlbAmount")),
                "strEstate" = COALESCE($5,"strEstate")),
            
            WHERE "intId" = $1 RETURNING *`

            const values = [
                data.intIdTransaction,
                data.intIdCategorie,
                data.strDescription,
                data.dlbAmount,
                data.strEstate,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "La transacción ha sido actualizada correctamente.",
                data: response.rows[0]
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setTransaction de la clase TransactionDAO",
            };

            return result;
        }
    }

    async getTransaction(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `
                SELECT * 
                FROM public."tbl_Transactions"
            
                WHERE ("intIdUser" = $1)
                AND ("intId" = $2 OR "intId" = $1 IS NULL)`

            const values = [
                data.intIdUser,
                data.intIdTransaction,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                data: response.rows,
                msg: "La transacción ha sido actualizada correctamente.",
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setTransaction de la clase TransactionDAO",
            };

            return result;
        }
    }
}

module.exports = TransactionDAO