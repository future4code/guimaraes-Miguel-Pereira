import cors from "cors";
import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import { Users } from "./users";
import { Posts } from "./posts";

const app = express();
app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em: http://localhost:${address.port}`);
  } else {
    console.error(`Falha na incialização do servidor.`);
  }
});

//Ex 1 a 4
app.get("/", (req: Request, res: Response) => {          
      res.status(200).send("Tudo ok")
});

app.get("/users", (req: Request, res: Response) => {

  try{
    res.status(200).send(Users)
  }
  catch{
    if(!Users.length){
      res.status(400).send("falha na requisição")
    }
  }
  
})

//Ex 5 a 8
// Criei o Array de posts em um novo arquivo para 
//deixar o projeto melhor organizado.
app.get("/posts", (req: Request, res: Response) => {
  try{
    res.status(200).send(Posts)
  }
  catch{
    if(!Posts.length){
      res.status(400).send("falha na requisição")
    }
  }
})

app.get("/posts/:id", (req: Request, res: Response) => {
  try{
    const id = Number(req.params.id)
    const filterPost = Posts.filter((post) => {
      if(id === post.id)
      return post
    })
    res.status(200).send(filterPost);
  }
  catch(error){
    res.status(400).send("Post não encontrado ou inexistente")
  }
})

//Eexercício 9
