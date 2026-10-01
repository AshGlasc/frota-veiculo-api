import { Router } from "express";

veiculoRouter.get("/", async (req, res)) => {
    const veiculo = await veiculoService.getAll();
    return res.json(veiculo);
};

veiculoRouter.post("/", async (req, res)) => {
    const veiculo = await veiculoService.create(req.body);
    return res.status(201).json(veiculo);
}