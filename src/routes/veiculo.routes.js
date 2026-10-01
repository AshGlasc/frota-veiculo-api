import { Router } from "express";
import veiculoService from '../services/produtos.service.js';

export const veiculoRouter = router()
veiculoRouter.get("/", async (req, res)) => {
    const veiculo = await veiculoService.getAll();
    return res.json(veiculo);
}

veiculorouter.post('/', async (req, res) => {
  try {
    const veiculo = await veiculoService.listarVeiculo
    res.json(veiculos)
      } catch (error) {
        console.error(error);
      }
    }
)
 ;
















export default router;