import { Request, Response } from 'express';
import IController from "./ControllerInterface";

let data: any[] = [
  { id : 1 , name: "asd"},
  { id : 2 , name: "qwe"},
  { id : 3 , name: "zxczxc"},
  { id : 4 , name: "wtewrwq"},
  { id : 5 , name: "ewkpr"},
]

class UserController implements IController{
  index(req: Request, res: Response<any>): Response<any> {
    return res.send(data);
  }
  create(req: Request, res: Response<any>): Response<any> {
    data = [...data, req.body];
    return res.send('create sucess');
  }
  show(req: Request, res: Response<any>): Response<any> {
    const { id } = req.params;
    let user = data.find(x => x.id === parseInt(id));
    return res.send(user);
  }
  update(req: Request, res: Response<any>): Response<any> {
    const { id } = req.params;
    const { name } = req.body;
    let user = data.find(x => x.id === parseInt(id));
    user.name = name;
    return res.send('update success');
  }
  delete(req: Request, res: Response<any>): Response<any> {
    const { id } = req.params;
    let user = data.filter(x => x.id !== parseInt(id));
    return res.send(user);
  }
  
}

export default new UserController();