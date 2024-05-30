import { usuarioModel } from "../models/usuario.model.js"

export const getAllUsers = async(req, res) => {
    try{
        const usuarios = await usuarioModel.findAll()
        res.json(usuarios)
    }catch(error){
        console.error(error);
        res.status(500).json({ ok: false, message: "Error al obtener usuarios" });
    }
}

export const createUser = async(req, res)=> {
    try {
        const { nombre, balance } = req.body;
        if (!nombre || balance === undefined) {
            return res.status(400).json({ ok: false, message: "Nombre y balance son requeridos" });
        }
        const newUser = await usuarioModel.create({ nombre, balance });
        res.status(201).json({ newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "Error al crear usuario" });
    }

}

export const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await usuarioModel.remove(id);
        if (!user) {
            return res.status(404).json({ ok: false, message: "Usuario no encontrado" });
        }
        res.status(200).json({ ok: true, message: "Usuario eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "Error al eliminar usuario" });
    }
}

export const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, balance } = req.body;
        if (!nombre || balance === undefined) {
            return res.status(400).json({ ok: false, message: "Nombre y balance son requeridos" });
        }
        const usuario = await usuarioModel.update(id, { nombre, balance });
        if (!usuario) {
            return res.status(404).json({ ok: false, message: "Usuario no encontrado" });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "Error al actualizar usuario" });
    }
}