import { Request, Response, NextFunction } from "express";
import HttpError from "../helpers/HttpError.js";

const validateBody = (schema: any) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
