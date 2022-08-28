import { app } from "./app"
import { movieRouter } from "./controller/routes/movieRouter"
import { userRouter } from "./controller/routes/userRouter"


//Users
//Create User
app.use("/user", userRouter)
//Get All Users
app.use('/users', userRouter)

//Movies
//Create Movie
app.use("/movie", movieRouter)