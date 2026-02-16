import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = Number(process.env.S_PORT);

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
