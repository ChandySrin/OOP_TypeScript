import express from "express";

import UserController from "../Controllers/UserController"

const userRoutes = express.Router();

userRoutes.get("/", UserController.getAllUsers);
userRoutes.post("/create", UserController.createUser);
userRoutes.put("/update/:id", UserController.updateUser);
userRoutes.delete("/delete/:id", UserController.deleteUser);

export default userRoutes;