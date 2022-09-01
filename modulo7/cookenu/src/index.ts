import { app } from "./app";
import { userRouter } from "./controller/routes/UserRoutes";


app.use("/users", userRouter)
