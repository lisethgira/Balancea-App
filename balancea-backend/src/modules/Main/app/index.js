//Librerias
const express = require("express");
const app = express();

//Librerias adicionales
const cors =  require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

//Declaracion de variables globales
app.set("port", process.env.APP_PORT);

//Middlewares
app.use(cors())
app.use(express.json());
app.use(morgan((process.env.ENV = "development" ? "dev" : "common")))
app.use(helmet());
app.use(compression({ level: 9 }));

//Router
app.use(require("../infra/http/mainRoutes.routes"));
app.use("/balancea/api",require("../../Categories/infra/http/categorie.routes"))
app.use("/balancea/api",require("../../Transactions/infra/http/transaction.routes"))

//Static
app.use(express.static("public"));

module.exports = app