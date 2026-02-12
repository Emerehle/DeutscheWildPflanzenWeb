import app from './app';

const port = process.env.S_PORT;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
