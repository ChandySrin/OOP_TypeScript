import { Response } from "express";
import AppError from "../utils/error";

export default class BaseController {
  protected sendSuccess(
    res: Response,
    data: any,
    statusCode = 200
  ): void {
    res.status(statusCode).json({
      success: true,
      data
    });
  }

  protected sendError(
    res: Response,
    error: string,
    statusCode = 500
  ): void {
    res.status(statusCode).json({ 
      success: false,
      error
     });
  }
  protected async handleAsyncError(
    res: Response,
    asyncMethod: () => Promise<any>,
  ): Promise<void> {
    try {
      await asyncMethod();
    } catch (error) {
      if (error instanceof AppError) {
        this.sendError(res, error.message, error.statusCode);
        return;
      }

      if (error instanceof Error) {
        this.sendError(res, error.message, 500);
      }else {
        this.sendError(res, "Internal server error", 500);
      }
    }
  }
}
