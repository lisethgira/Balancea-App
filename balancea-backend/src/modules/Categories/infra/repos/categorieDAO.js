//Librerias
const { Client } = require("pg")

//Conexion
const connection = require("../../../../common/config/config_connectionPG")

class CategorieDAO {
    async setCategorie(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `INSERT INTO public."tbl_Categories"(
                "intIdUser",
                "strColor",
                "strIcon",
                "strDescription",
                "strType"
                ) VALUES ($1, $2, $3, $4, $5) RETURNING *`

            const values = [
                data.intIdUser,
                data.strColor,
                data.strIcon,
                data.strDescription,
                data.strType,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "La categoria ha sido creada correctamente.",
                data: response.rows[0]
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setCategorie de la clase CategorieDAO",
            };

            return result;
        }
    }

    async updateCategorie(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `UPDATE public."tbl_Categories"
                SET 
                "strColor" = COALESCE($2,"strColor")),
                "strIcon" = COALESCE($3,"strIcon")),
                "strDescription" = COALESCE($4,"strDescription"))
            
            WHERE "intId" = $1 RETURNING *`

            const values = [
                data.intIdCategorie,
                data.strColor,
                data.strIcon,
                data.strDescription,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                msg: "La categoria ha sido actualizada correctamente.",
                data: response.rows[0]
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setCategorie de la clase CategorieDAO",
            };

            return result;
        }
    }

    async getCategorie(data) {
        try {
            const client = new Client(connection)
            await client.connect()

            const query = `
                SELECT * 
                FROM public."tbl_Categories"
            
                WHERE ("intIdUser" = $1)
                AND ("intId" = $2 OR "intId" = $1 IS NULL)`

            const values = [
                data.intIdUser,
                data.intIdCategorie,
            ]

            const response = await client.query(query, values)

            await client.end()

            const result = {
                error: false,
                data: response.rows,
            }

            return result
        }
        catch (error) {
            const result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el metodo setCategorie de la clase CategorieDAO",
            };

            return result;
        }
    }
}

module.exports = CategorieDAO