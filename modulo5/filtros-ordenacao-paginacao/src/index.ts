import { app } from "./app";
import  { getAllUsers }  from "./endpoints/getAllUsers";
import { getUserByName } from './endpoints/getUserByName';

app.get("/users", getAllUsers);

app.get('/user', getUserByName);

