import express from "express";

import UserController from "../Controllers/UserController"

const userRoutes = express.Router();
const userController = new UserController();

userRoutes.get("/", (req, res) => userController.getAllUsers(req, res));
userRoutes.post("/create", (req, res) => userController.createUser(req, res));
userRoutes.put("/update/:id", (req, res) => userController.updateUser(req, res));
userRoutes.delete("/delete/:id", (req, res) => userController.deleteUser(req, res));

export default userRoutes;
