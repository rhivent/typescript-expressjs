import { Request, Response } from 'express';
import Authentication from "../utils/Authentication";
const db = require('../db/models');

class AuthController{
  register = async (req: Request, res: Response): Promise<Response> => {
    return new Promise( async (resolve, reject) => {
      let { username, password } = req.body;
      const hashedPassword: string = await Authentication.passwordHash(password);
      console.log(username, hashedPassword);
      const connectModel = new db.user; 
      const createdUser = await connectModel.create({ 
        username, 
        password : hashedPassword 
      });
      if(createdUser){
        resolve();
        return res.send('Registrasi Sukses !');
      }else{
        reject('Ada error !');
      }
    });
      
  }
  login = async (req: Request, res: Response): Promise<Response> => {
    // cari data user by username
    let { username, password } = req.body;
    const user = await db.user.findOne({
      where : { username }
    });

    // check password
    let compare = await Authentication.passwordCompare(password,user.password);

    // generate token
    if(compare){
      let token = Authentication.generateToken(user.id, username, user.password);
      return res.send({
        token
      });
    }
    return res.send("Auth failed !");
  }

  profile = (req: Request, res: Response): Response => {
    return res.send(req.app.locals.credential);
  }
}

export default new AuthController();