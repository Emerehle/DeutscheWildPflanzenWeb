import express, {Application, Request, Response} from 'express';
import { getAllPlants} from './controllers/plantsController';

const app: Application = express();
app.use(express.json());

app.get('/api/plants', getAllPlants);

export default app;