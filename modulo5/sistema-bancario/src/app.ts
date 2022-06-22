import express from "express";
import { AddressInfo } from "net";

export const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3004, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`)
    } else {
        console.log( "Falha de inicialização!" )
    }

}) 