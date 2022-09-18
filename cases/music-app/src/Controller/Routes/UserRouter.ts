import  express  from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userController = new UserController();
//Signup
userRouter.post("/signup", userController.signup)
//Login
userRouter.post("/login", userController.login)
//Edit User
userRouter.put("/edit/:id", userController.editUser)
//Get Current Profile
// userRouter.get("/profile", userController.getCurrentProfile)
// //Get Profile By Id
// userRouter.get("/:id", userController.getProfileById)
// //Get All Users
// userRouter.get("/", userController.getAllUsers)