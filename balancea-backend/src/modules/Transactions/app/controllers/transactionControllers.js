const setTransaction = require("../../domain/setTransaction.service")
const updateTransaction = require("../../domain/updateTransaction.service")
const getTransaction = require("../../domain/getTransaction.service")

class transactionControllers {
    async setTransaction(req, res) {
        try {
            let data = req.body

            const service = new setTransaction(data)

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

    async updateTransaction(req, res) {
        try {
            let data = req.body

            const service = new updateTransaction(data)

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

    async getTransaction(req, res) {
        try {
            const objParams = req.query

            const query = await getTransaction(objParams)

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

module.exports = transactionControllers