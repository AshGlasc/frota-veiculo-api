import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import veiculoRouter from './routes/veiculo.routes.js';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());


app.use('/veiculos', veiculoRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

