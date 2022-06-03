import { Request, Response } from "express"
import cors from "cors"
import { app } from "./app"
import { TasksList } from "./data"

//Inicial Test
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong! 🏓")
})

//Get All Tasks
app.get("/tasks", (req: Request, res: Response) => {
    res.status(200).send(TasksList) 
})

//Get Task By Completed
app.get("/user/:userId/tasks/:completed", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const taskCompleted: any = req.params.completed

    const taskDone = TasksList.filter((task)=>{       
        if (taskCompleted === "true" && task.completed === true && userId === task.userId) {
            return task;
        } else if (taskCompleted === "false" && task.completed === false && userId === task.userId) {
            return task;
        }
})
    res.status(200).send(taskDone)
    
})  

//Get All Tasks From User
app.get("/tasks/user/:userId", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const allTasks = TasksList.filter((user)=>{
        if( userId === user.userId)
        return user
    })
    try {
        res.status(200).send(allTasks)
    }
    catch{
        res.status(400).send("Usuário não encontrado ou inexistente")
    }
})

//Get Task From User
app.get("/user/:userId/task/:id", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const taskId = Number(req.params.id)

    const userTask = TasksList.filter((user)=>{
        if( userId === user.userId && taskId === user.id)
        return user
    })
  res.status(200).send(userTask)
})

//Create Task
app.post("/task/create/:userId", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const id = Math.round(Math.random() * (10 - 5) + 5)
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

//Edit Task
app.put("/user/:userId/task/edit/:id", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const taskId = Number(req.params.id)
    const completed = Boolean(req.body.completed)

    TasksList.forEach((user) => {
        if(userId === user.userId && taskId === user.id){

            user.completed = completed;
        }
    })

    res.status(200).send(TasksList);


})

//Delete Task
app.delete("/user/:userId/task/delete/:id", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const taskId = Number(req.params.id)

    TasksList.forEach((task, i) => {
        if(userId === task.userId && taskId === task.id){
            TasksList.splice(i, 1)
        }
       
    })

    res.status(200).send(TasksList)
} )