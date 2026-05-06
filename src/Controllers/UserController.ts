import { Request, Response } from "express";
import BaseController from "./baseController";
import UserService from "../Services/UserService";

export default class UserController extends BaseController {

  async getAllUsers(req: Request, res: Response) {
    await this.handleAsyncError(res, async () => {
      const users = await UserService.getAllUsers();
      this.sendSuccess(res, users);
    });
  }

  async createUser(req: Request, res: Response) {
    await this.handleAsyncError(res, async () => {
      await UserService.createUser(req.body);
      this.sendSuccess(res, { message: "User created successfully" }, 201);
    });
  }

  async updateUser(req: Request, res: Response) {
    await this.handleAsyncError(res, async () => {
      await UserService.updateUser(req.params.id, req.body);
      this.sendSuccess(res, { message: "User updated successfully" });
    });
  }

  async deleteUser(req: Request, res: Response) {
    await this.handleAsyncError(res, async () => {
      await UserService.deleteUser(req.params.id);
      this.sendSuccess(res, { message: "User deleted successfully" });
    });
  }
}