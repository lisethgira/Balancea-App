const setCategorie = require("../../domain/setCategorie.service")
const updateCategorie = require("../../domain/updateCategorie.service")
const getCategorie = require("../../domain/getCategorie.service")

class categorieControllers {
    async setCategorie(req, res) {
        try {
            let data = req.body

            const service = new setCategorie(data)

            const query = await service.main()

            if (query.error) {
                throw new Error(query.msg)
            }

            res.status(200).json(query)
        } catch (error) {
            let result = {
                error: true,
                msg: error.message,
            };

            res.status(400).json(result);
        }
    }

    async updateCategorie(req, res) {
        try {
            let data = req.body

            const service = new updateCategorie(data)

            const query = await service.main()

            if (query.error) {
                throw new Error(query.msg)
            }

            res.status(200).json(query)
        } catch (error) {
            let result = {
                error: true,
                msg: error.message,
            };

            res.status(400).json(result);
        }
    }

    async getCategorie(req, res) {
        try {
            const objParams = req.query

            const query = await getCategorie(objParams)

            if (query.error) {
                throw new Error(query.msg)
            }

            res.status(200).json(query)
        } catch (error) {
            let result = {
                error: true,
                msg: error.message,
            };

            res.status(400).json(result);
        }
    }
}

module.exports = categorieControllers