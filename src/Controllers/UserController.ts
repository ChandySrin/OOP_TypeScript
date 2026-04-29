import express from "express";
import User from "../Models/User";

export default class UserController {
   static async getAllUsers(req: express.Request, res: express.Response) {
        try {
            const users = await User.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch users" });
        }
    }
    static async createUser(req: express.Request, res: express.Response) {
        try {
            const { name, email } = req.body;
            await User.create(name, email);
            
            res.status(201).json({ message: "User created successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to create user" });
        }
    }

    static async updateUser(req: express.Request, res: express.Response) {
        try {
            const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
            const { name, email } = req.body;
            await User.update(id, name, email);
            res.json({ message: "User updated successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to update user" });
        }
    }

    static async deleteUser(req: express.Request, res: express.Response) {
        try {
            const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
            await User.delete(id);
            res.json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete user" });
        }
    }
}       