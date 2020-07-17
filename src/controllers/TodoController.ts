import { Request, Response } from 'express';
import IController from "./ControllerInterface";

class TodoController implements IController{
  index(req: Request, res: Response<any>): Response<any> {
    return res.send('index todo');
  }
  create(req: Request, res: Response<any>): Response<any> {
    return res.send('create todo');
  }
  show(req: Request, res: Response<any>): Response<any> {
    return res.send('show todo');
  }
  update(req: Request, res: Response<any>): Response<any> {
    return res.send('update todo');
  }
  delete(req: Request, res: Response<any>): Response<any> {
    return res.send('delete todo');
  }
  
}

export default new TodoController();