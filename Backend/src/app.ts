import express, {Application, Request, Response} from 'express';
import { startImageProcess } from './controllers/imageController';

const app: Application = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hallo, Welt!');
});

app.post('/api/image-process', startImageProcess);

export default app;