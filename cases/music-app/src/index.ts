import { app } from "./app";
import { playlistRouter } from "./Controller/Routes/PaylistRouter";
import { userRouter } from "./Controller/Routes/UserRouter"


app.use("/users", userRouter)

app.use("/playlists", playlistRouter)