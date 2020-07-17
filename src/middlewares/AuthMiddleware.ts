import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  if(!req.headers.authorization){
    return res.status(401).send("Token not provided, please input Bearer {{token}}");
  }
  let secretKey = process.env.JWT_SECRET_KEY || "search";
  const token: string = req.headers.authorization.split(" ")[1];

  try {
    const credential: string | object = jwt.verify(token, secretKey);

    if(credential){
      req.app.locals.credential = credential;
      next();
    }

    return res.send("token invalid");
  } catch (error) {
    return res.send(error.message);
  }
  // let auth = false;
  // if(auth) {
  //   // next ini adalah melanjutkan program
  //   next();
  // }
  // return res.send(`Unauthorized`);
}