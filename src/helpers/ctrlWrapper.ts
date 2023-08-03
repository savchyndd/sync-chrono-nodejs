import e from "express";

const ctrlWrapper = (
  ctrl: (req: any, res: any, next: any) => Promise<void>
) => {
  const func = async (req: any, res: any, next: any) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
