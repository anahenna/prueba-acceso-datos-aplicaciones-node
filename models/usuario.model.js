import {pool} from "../database/connection.js"

const findAll = async()=>{
    const {rows} = await pool.query('SELECT * FROM usuarios')
    return rows
}

const create = async(nombre, balance) =>{
    const query ={
        text: `INSERT INTO USUARIOS (nombre, balance) VALUES ($1, $2) RETURNING*`,
        values: [nombre, balance]
    }
    const {rows} = await pool.query(query)
    return rows
}

const remove = async (id) => {
    const query ={
        text: `DELETE FROM USUARIOS WHERE id = $1 RETURNING*`,
        values: [id]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const update = async(id, nombre, balance) => {
    const query ={
        text: `UPDATE USUARIOS SET nombre = $1, balance = $2 WHERE id = $3 RETURNING*`,
        values: [nombre, balance, id]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}




export const usuarioModel = {
    findAll,
    create,
    remove,
    update
}