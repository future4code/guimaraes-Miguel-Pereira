import { app } from "./app"
import { movieRouter } from "./controller/routes/movieRouter"
import { userRouter } from "./controller/routes/userRouter"


//Users
app.use("/user", userRouter)
app.use('/users', userRouter)

//Movies
app.use("/movie", movieRouter)