import { Response } from "express";
import AppError from "../utils/error";

export default class BaseController {
  protected static success(
    res: Response,
    data: unknown,
    statusCode = 200
  ): void {
    res.status(statusCode).json(data);
  }

  protected static error(
    res: Response,
    error: unknown,
    fallbackMessage = "Internal server error"
  ): void {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }

    res.status(500).json({ error: fallbackMessage });
  }
}
