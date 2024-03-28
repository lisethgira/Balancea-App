require ("dotenv-flow").config()

//Librerias
const { Client } = require("pg")

const http = require("http")
const https = require('https');

//Modules
const app = require("./index");
const connection = require("../../../common/config/config_connectionPG");

class clsServer{
    #objServer;

    async main(){
        await this.#server()
    }

    async #server(){
        try {
            this.#objServer = http.createServer(app).listen(app.get("port"))
            const client = new Client(connection)
            await client.connect().then(()=>{
                console.log("Conexion con BD.")
            })
            console.log("Server corriendo en el puerto:", app.get("port"));
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = clsServer