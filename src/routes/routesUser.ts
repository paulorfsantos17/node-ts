import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const routerUser = Router()
const userController = new UserController()


routerUser.get('/users', userController.getAllUsers)
routerUser.post('/user', userController.createUser)
routerUser.delete('/user', userController.deleteUserByName)