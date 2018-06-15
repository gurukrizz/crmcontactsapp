import * as express from 'express';
import * as bodyparser from 'body-parser';
import { Routes } from './routes/crmRoutes';
import * as mongoose from 'mongoose';

class App {
    public app: express.Application
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/crmcontacts';

    constructor(){
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        //Adding the reqired middlewares to be used.
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;
