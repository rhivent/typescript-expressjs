import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

class App {
  public app: Application;

  constructor(){
    this.app = express();
    this.plugins(); 
    this.routes(); 
  }

  protected plugins(): void {
    // melihat isi paramter dr sebuah request
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send("This is route with typescript");
    });

    this.app.route('/users').post((req: Request, res: Response) => {
      res.send(req.body);
    });
  }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
  console.log(`This app running on port : ${port}`);
});







// const app = express();

// app.route('/').get((req,res) => {
//     res.send('Hi all, this is my first router !');
// });

// // jalankan servernya
// app.listen(8000);