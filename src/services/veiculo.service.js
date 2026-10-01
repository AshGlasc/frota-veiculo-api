
class veiculoService {
    async getAll(){
        const res = await pool.query("SELECT *");
        return res.rows
    }
}
 
async.create(){
    const res = await pool.query("INSERT INTO veiculos RETURNING *", []);
        res.rows(0)
}

export const veiculoService = new veiculoService()
