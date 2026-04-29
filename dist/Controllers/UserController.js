"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../Models/User"));
class UserController {
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.getAllUsers();
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ error: "Failed to fetch users" });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email } = req.body;
                yield User_1.default.create(name, email);
                res.status(201).json({ message: "User created successfully" });
            }
            catch (error) {
                res.status(500).json({ error: "Failed to create user" });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
                const { name, email } = req.body;
                yield User_1.default.update(id, name, email);
                res.json({ message: "User updated successfully" });
            }
            catch (error) {
                res.status(500).json({ error: "Failed to update user" });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
                yield User_1.default.delete(id);
                res.json({ message: "User deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ error: "Failed to delete user" });
            }
        });
    }
}
exports.default = UserController;
