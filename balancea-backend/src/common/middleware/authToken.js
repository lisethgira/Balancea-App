const jwt = require("jsonwebtoken");

const secretKey = process.env.KEY_TOKEN

const authToken = (req, res, next) => {
    let token = req.get("token");

    try {
        jwt.verify(token, secretKey, { algorithms: ["RS256"] }, (error, decoded) => {
            if (error) {
                let result = {
                    error: true,
                    msg: "Token de autorizacion no valido",
                    info: error.message,
                };
                return res.status(401).json(result);
            } else {
                req.strDataUser = { ...decoded, token };
                next();
            }
        });
    } catch (error) {
        let result = {
            error: true,
            msg: error.message,
        };
        return res.status(400).json(result);
    }
};

module.exports = authToken;
