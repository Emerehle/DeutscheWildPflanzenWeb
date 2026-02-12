import express, {Application, Request, Response} from 'express';
import 'dotenv';
import db from './db';

const app: Application = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.json({status: 'ok'});
});

export default app;