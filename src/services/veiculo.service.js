import pool from '../config/db.js';
import 'dotenv/config';


 class veiculoService {
 
  async create({ modelo, marca, ano, placa }) {
    const query = `
      INSERT INTO veiculos (modelo, marca, ano, placa)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`;
    const values = [modelo, marca, ano, placa];
    const { rows } = await pool.query(query, values);
    return rows;
  }
async getAll(){
        const res = await pool.query("SELECT * FROM veiculos;");
        return res.rows
    }  
}


  
 

export default new veiculoService();