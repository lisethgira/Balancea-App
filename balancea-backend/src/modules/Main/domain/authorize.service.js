//Librerias
const jwt = require("jsonwebtoken");

const secretKey = process.env.KEY_TOKEN

const authorize = async (token) => {
    try {
        let result;

        jwt.verify(token, secretKey, { algorithms: ["RS256"] }, (error, decoded) => {
            if (error) {
                throw new Error("Token de autorización no valido");
            }

            result = {
                error: false,
                data: decoded,
            };
        });

        return result;
    } catch (error) {
        let result = {
            error: true,
            msg: error.message,
        };

        return result;
    }
};

module.exports = authorize;