//1.
import cors from "cors";
import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import { Users } from "./users";

const app = express();
app.use(express.json());
app.use(cors())


//Ex 1.
app.get("/", (req: Request, res: Response) => {          
    res.status(200).send("Tudo ok")
});

app.post("/",)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;




