import * as express from 'express';
import * as cors from 'cors';
//importing routers
import router from './routes/router';
import connect from './db/connect';

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

connect();


export default app;