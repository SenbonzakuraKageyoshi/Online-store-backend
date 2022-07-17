import { Brand, Product, Type } from "../models/models.js";

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

        const brands = await Brand.findAll({where: id})

        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({message: 'Ошибка получения брендов'})
    }
};

const getBrand = async (req, res) => {
    try {
        const { id } = req.params

        const brand = await Brand.findOne({where:{id}, include: [{model: Product, include: [Type]}]})

        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({message: 'Ошибка получения бренд'})
    }
};

export {
    createBrand, getBrands, getBrand
}