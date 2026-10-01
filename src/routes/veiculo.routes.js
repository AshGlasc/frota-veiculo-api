import { Router } from "express";
import veiculoService from '../services/veiculo.service.js';


const veiculoRouter = Router();

veiculoRouter.get("/", async (req, res) => {
    const veiculo = await veiculoService.getAll();
    return res.json(veiculo);
});

veiculoRouter.post('/', async (req, res) => {
  try {
    const veiculo = await veiculoService.create(req.body);
    res.json(veiculo)
      } catch (error) {
        console.error(error);
      }
    })

 ;
export { veiculoRouter };















export default veiculoRouter;