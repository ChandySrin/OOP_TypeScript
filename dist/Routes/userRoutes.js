"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../Controllers/UserController"));
const userRoutes = express_1.default.Router();
userRoutes.get("/", UserController_1.default.getAllUsers);
userRoutes.post("/create", UserController_1.default.createUser);
userRoutes.put("/update/:id", UserController_1.default.updateUser);
userRoutes.delete("/delete/:id", UserController_1.default.deleteUser);
exports.default = userRoutes;
