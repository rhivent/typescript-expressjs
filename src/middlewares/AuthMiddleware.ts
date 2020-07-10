import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  let auth = false;
  if(auth) {
    // next ini adalah melanjutkan program
    next();
  }
  return res.send(`Unauthorized`);
}