import app from "./app";
import connection from "./connection";
import {Request, Response} from "express";

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong! 🏓")
});

//Get All Actors
app.get("/actor", async ( req: Request, res: Response) => {
    try {
        console.log("Teste")
        const result = await connection("Actor").select();
        res.send(result)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Erro inesperado.")
    }
})
//Metodo passando a chamada do raw dentro de uma variável.
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0];
  }
  //Aqui criamos o endPoint e chamamos a respectiva variavel dentro do send.
  //Get User ByID
//   app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id
  
//       res.send(await getActorById(id))
  
//       res.end()
//     } catch (error: any) {
//           console.log(error.message)
//       res.status(500).send("Unexpected error")
//     }
// }); 
//Exercício 1. Endpoints por Raw  A)
//B)
//Get Actor ByName
app.get('/actor/name', async(req: Request, res: Response) => {
    try {
        const {name} = req.query

        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
      `)
      res.send(result[0][0]);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send("Erro inesperado.")
    }
});
//C)
//Get Quantity ByGender
// app.get('/actor/gender', async( req: Request, res: Response) => {
//     try {
//         const {gender} = req.query

//         const result = await connection.raw(`
//         SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
//         `)
//         res.send(result[0][0]);
//     } catch (error: any) {
//         console.log(error.message);
//         res.status(500).send("Erro inesperado.")
//     }
// } )
//Exercício 2 Endpoints por Query Builders.
//A)
// Update Salary
// app.put('/actor/:id', async( req: Request, res: Response) => {
//     try {
//         const result = await connection("Actor")
//         .update({
//             salary: req.body.salary
//         })
//         .where({ id: req.params.id })

//         res.send(result);
//     } catch (error: any) {
//         console.log(error.message);
//         res.status(500).send("Erro inesperado.")
//     }
// })
//B)
//Delete Actor
// app.delete('/actor/:id', async (req: Request, res: Response) => {
//     try {
//        await connection("Actor")
//        .delete()
//        .where({ id: req.params.id })

//        res.send("Ator deletado.")
//     } catch (error: any) {
//         console.log(error.message);
//         res.status(500).send("Erro inesperado.")
//     }
// })
//C)
//Get Average Salary
app.get('/actor/avg',async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor")
        .avg("Salary as average")
        .where({ gender: req.query.gender })

        res.send(result)
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send("Erro inesperado.")
    }
});
//Exercício 3
//A)
//Get Actor ByID
app.get("/actor/id/:id", async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor")
        .where({ id: req.params.id })

        res.status(200).send(result);
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Erro inesperado")
    }
}); 
//B)
// Get Quantity ByGender
app.get('/actor/gender', async( req: Request, res: Response) => {
    try {
        const result = await connection("Actor")
        .count('* as count')
        .where({ gender : req.query.gender })
        res.status(200).send(result);

    } catch (error: any) {
        console.log(error);
        res.status(500).send("Erro inesperado.")
    }
} )
//Exercício 4
app.post('/actor', async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor")
        .insert(
            {
            id: Math.round(Math.random() * (51 - 1 ) + 1),
            name: req.body.name,
            birth_date: new Date(req.body.birthDate),
            salary: req.body.salary,
            gender: req.body.gender
            })

            res.status(201).send("Ator / Atriz adicionado(a).");
    } catch (error: any ) {
        console.log(error.message);
        res.status(500).send("Erro inesperado.")
    }
})
//A)
app.put('/actor', async (req: Request, res: Response) => {  
    try {
        await connection("Actor")
        .update({
            salary: req.body.salary
        })
        .where({
            id: req.body.id
        })
        res.send("Salario atualizado!")
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send("Erro inesperado.")
    }
})
//B
app.delete('/actor/:id',async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .delete()
            .where({id: req.params.id})
            res.status(200).send("Ator/Atriz deletado(a).")
    } catch (error: any ) {
        console.log(error.message);
        res.status(500).send("Erro inesperado.")
    }
})