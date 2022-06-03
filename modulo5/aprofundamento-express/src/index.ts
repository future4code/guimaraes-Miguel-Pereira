import { Request, Response } from "express"
import cors from "cors"
import { app } from "./app"
import { TasksList } from "./data"


app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
})

app.get("/tasks/:id", (req: Request, res: Response) => {
    const userId = Number(req.params.id)
    const taskCompleted = Boolean(req.query.completed)
    const taskDone = TasksList.filter((user)=>{
        if( userId === user.userId && taskCompleted === user.completed ){
            return user
        } 
    })
        res.status(200).send(taskDone)
    
    })

app.post("/task/:id/create", (req: Request, res: Response) => {
    const userId = Number(req.params.id)
    const id = Math.random()
    const title = req.body.title
    const completed = Boolean(req.body.completed)

    TasksList.push({
        userId: userId,
        id: id,
        title: title,
        completed: completed,
    })

    res.status(200).send(TasksList)

})

app.put("/task/edit/:id", (req: Request, res: Response) => {

})

app.get("/tasks/user/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const allTasks = TasksList.filter((user)=>{
        if( id === user.userId)
        return user
    })
    try {
        res.status(200).send(allTasks)
    }
    catch{
        res.status(400).send("Usuário não encontrado ou inexistente")
    }
})

app.delete("/task/delete/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)

    TasksList.forEach((task, i) => {
        if(task.id === id){
            TasksList.splice(i, 1)
        }
    })

    res.status(200).send(TasksList)
} )

app.get("/user/:userId/task/:id", (req: Request, res: Response) => {
    const taskId = Number(req.params.id)
    const userId = Number(req.params.id)

    const userTask = TasksList.filter((user)=>{
        if( userId === user.userId && taskId === user.id)
        return user
    })
    try {
        res.status(200).send(userTask)
    }
    catch{
        res.status(400).send("Task não encontrada ou inexistente")
    }
})