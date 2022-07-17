import { Type, Product, Brand } from "../models/models.js";

const createType = async (req, res) => {
    try {
        const { name } = req.body

        const type = await Type.create({name})

        res.status(200).json(type);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка создания категории'})
    }
};

const getTypes = async (req, res) => {
    try {
        const { id } = req.params

        const types = await Type.findAll({id})

        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({message: 'Ошибка получения категорий'})
    }
};

const getType = async (req, res) => {
    try {
        const { id } = req.params

        const type = await Type.findOne({where: {id}, include: [{model: Product, include: [Brand]}]})


        res.status(200).json(type);
    } catch (error) {
        res.status(500).json({message: 'Ошибка получения типа'})
    }
};

export {
    createType, getTypes, getType
}