import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  userService: UserService;
  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (req: Request, res: Response) => {
    const user = req.body;

    if (!user.name) {
      return res.status(400).json({ message: "Bad request: name required" });
    }
    if (!user.email) {
      return res.status(400).json({ message: "Bad request: email required" });
    }
    this.userService.createUser(user.name, user.email);
    return res.status(201).json({ message: "Create User" });
  };

  getAllUsers = (req: Request, res: Response) => {
    const users = this.userService.getAllUsers();
    return res.status(200).json(users);
  };

  deleteUserByName = (req: Request, res : Response) => {
    const user = req.body;
    if(!user.name) {
      return res.status(400).json({message : 'Bad request: name required'});
    }
    this.userService.deleteUser(user.name)
    return res.status(200).json({message : 'User delete'});
  }
}
