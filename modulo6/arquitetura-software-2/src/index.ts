import { app } from "./app"
import { movieRouter } from "./routes/movieRouter"
import { userRouter } from "./routes/userRouter"


//Users
app.use("/user", userRouter)
app.use('/users', userRouter)

//Movies
app.use("/movie", movieRouter)