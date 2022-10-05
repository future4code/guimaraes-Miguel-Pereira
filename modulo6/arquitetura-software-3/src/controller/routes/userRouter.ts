import express from 'express'
import { UserController } from '../UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/create", userController.create)

userRouter.get("/", userController.getUser)