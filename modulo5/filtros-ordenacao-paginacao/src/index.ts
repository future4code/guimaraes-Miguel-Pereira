import { app } from "./app";
import  getAllUsers   from "./endpoints/getAllUsers";
import  getSortedUser  from "./endpoints/getSortedUser";
import  getUserByName  from './endpoints/getUserByName';
import  getUserByType  from './endpoints/getUserByType';
import  getPageUser from './endpoints/getPageUser';
import  getAllEndpoints from './endpoints/getAllEndpoints'

//Get All Users
// app.get("/users", getAllUsers);
//Get User By Name
app.get('/user/name', getUserByName);
//Get User Sorted
app.get('/user/sort', getSortedUser );
//Get Page User
app.get('/user/page', getPageUser);
//Get User By Type
app.get('/user/:type', getUserByType);
//Get All Endpoints
app.get('/users', getAllEndpoints);
