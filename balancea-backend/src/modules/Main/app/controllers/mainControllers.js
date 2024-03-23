const serviceLogin = require("../../domain/login.service")
const serviceRegister = require("../../domain/register.service");
const authorize = require("../../domain/authorize.service")

class mainControllers {
    async serviceLogin(req, res) {
        try {
            let data = req.body

            const service = new serviceLogin(data)

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

    async serviceRegister(req, res) {
        try {
            let data = req.body

            const service = new serviceRegister(data)

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

    async authorize(req, res) {
        try {
            let { token } = req.headers

            const query = await authorize(token)

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

module.exports = mainControllers