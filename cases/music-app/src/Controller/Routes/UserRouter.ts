import  express  from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userController = new UserController();
//Signup
userRouter.post("/signup", userController.signup)
//Login
userRouter.post("/login", userController.login)
//Get All Users
userRouter.get("/", userController.getAllUsers)
//Edit User
userRouter.put("/edit/:id", userController.editUser)
//Delete User
userRouter.delete("/delete/:id", userController.deleteUser)
