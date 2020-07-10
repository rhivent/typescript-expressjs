import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import {config as dotenv} from "dotenv";

// Routers 
import UserRoutes from "./routers/UserRoutes";

class App {
  public app: Application;

  constructor(){
    this.app = express();
    this.plugins(); 
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    // melihat isi paramter dr sebuah request
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send("This is route with typescript");
    });

    this.app.use("/api/v1/users", UserRoutes);
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
  console.log(`This app running on port : ${port}`);
  console.log(`ENV host : ${process.env.DB_HOST}`);

});







// const app = express();

// app.route('/').get((req,res) => {
//     res.send('Hi all, this is my first router !');
// });

// // jalankan servernya
// app.listen(8000);