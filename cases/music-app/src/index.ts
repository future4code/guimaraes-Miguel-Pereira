import { app } from "./app";
import { userRouter } from "./Controller/Routes/UserRouter"


app.use("/users", userRouter)