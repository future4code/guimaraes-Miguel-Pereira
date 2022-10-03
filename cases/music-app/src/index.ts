import { app } from "./app";
import { playlistRouter } from "./Controller/Routes/PaylistRouter";
import { userRouter } from "./Controller/Routes/UserRouter"

//Rotas de Usuários
app.use("/users", userRouter)

//Rotas de Playlists
app.use("/playlists", playlistRouter)