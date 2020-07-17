import { Request, Response } from 'express';
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController{
  index = async (req: Request, res: Response<any>): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();
    
    return res.send({
      data : todos,
      message : "success"
    });
  }
  create = async (req: Request, res: Response<any>): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.store();

    return res.send({
      data : todo,
      message : "todo created"
    });
  }
  show = async (req: Request, res: Response<any>): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    return res.send({
      data : todo,
      message : "success"
    });
  }
  update = async (req: Request, res: Response<any>): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.update();

    return res.send({
      data : todo,
      message : "todo updated"
    });
  }
  delete = async (req: Request, res: Response<any>): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.delete();

    return res.send({
      data : todo,
      message : "todo deleted"
    });
  }
}

export default new TodoController();