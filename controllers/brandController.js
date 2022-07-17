import { Brand } from "../models/models.js";

const createBrand = async (req, res) => {
    try {
        const { name } = req.body

        const brand = await Brand.create({name})

        res.status(200).json(brand);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка создания бренда'})
    }
};

const getBrands = async (req, res) => {
    try {
        const { id } = req.params

        const types = await Brand.findAll({id})

        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({message: 'Ошибка получения брендов'})
    }
};

export {
    createBrand, getBrands
}