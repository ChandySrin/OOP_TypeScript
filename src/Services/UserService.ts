import User from "../Models/User";
import AppError from "../utils/error";

type UserPayload = {
  name?: unknown;
  email?: unknown;
};

type RouteId = string | string[] | undefined;

export default class UserService {
  static async getAllUsers() {
    return User.getAllUsers();
  }

  static async createUser(payload: UserPayload) {
    const { name, email } = this.validateUserPayload(payload);
    return User.create(name, email);
  }

  static async updateUser(id: RouteId, payload: UserPayload) {
    const userId = this.validateId(id);
    const { name, email } = this.validateUserPayload(payload);
    return User.update(userId, name, email);
  }

  static async deleteUser(id: RouteId) {
    const userId = this.validateId(id);
    return User.delete(userId);
  }

  private static validateId(id: RouteId): string {
    const userId = Array.isArray(id) ? id[0] : id;

    if (!userId || Number.isNaN(Number(userId))) {
      throw new AppError("Valid user id is required", 400);
    }

    return userId;
  }

  private static validateUserPayload(payload: UserPayload) {
    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";

    if (!name) {
      throw new AppError("Name is required", 400);
    }

    if (!email) {
      throw new AppError("Email is required", 400);
    }

    if (!this.isValidEmail(email)) {
      throw new AppError("Email is invalid", 400);
    }

    return { name, email };
  }

  private static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
