import { Request, Response } from 'express';
import IController from "./ControllerInterface";

class AuthController{
  index(req: Request, res: Response<any>): Response<any> {
    return res.send('');
  }
  create(req: Request, res: Response<any>): Response<any> {
    return res.send('');
  }
}

export default new AuthController();