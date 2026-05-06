import express from "express";
import BaseController from "./baseController";
import UserService from "../Services/UserService";

export default class UserController extends BaseController {
   static async getAllUsers(req: express.Request, res: express.Response) {
        try {
            const users = await UserService.getAllUsers();
            UserController.success(res, users);
        } catch (error) {
            UserController.error(res, error, "Failed to fetch users");
        }
    }
    static async createUser(req: express.Request, res: express.Response) {
        try {
            await UserService.createUser(req.body);
            
            UserController.success(res, { message: "User created successfully" }, 201);
        } catch (error) {
            UserController.error(res, error, "Failed to create user");
        }
    }

    static async updateUser(req: express.Request, res: express.Response) {
        try {
            await UserService.updateUser(req.params.id, req.body);
            UserController.success(res, { message: "User updated successfully" });
        } catch (error) {
            UserController.error(res, error, "Failed to update user");
        }
    }

    static async deleteUser(req: express.Request, res: express.Response) {
        try {
            await UserService.deleteUser(req.params.id);
            UserController.success(res, { message: "User deleted successfully" });
        } catch (error) {
            UserController.error(res, error, "Failed to delete user");
        }
    }
}       
