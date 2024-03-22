require ("dotenv-flow").config()

const http = require("http")
const https = require('https');

//Modules
const app = require("./index")

class clsServer{
    #objServer;

    async main(){
        await this.#server()
    }

    async #server(){
        try {
            this.#objServer = http.createServer(app).listen(app.get("port"))
            console.log("Server corriendo en el puerto:", app.get("port"));
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = clsServer