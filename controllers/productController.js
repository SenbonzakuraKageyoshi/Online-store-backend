import { Product, Type, Brand, ProductBrand, ProductType } from "../models/models.js";
import {v4} from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createProduct = async (req, res) => {
    try {
        const {name, price, typeId, brandId} = req.body;
        const {img} = req.files;
        let fileName = v4() + '.png';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const product = await Product.create({name, price, typeId, brandId, imgUrl: fileName});

        await ProductBrand.create({productId: product.id, brandId});
        await ProductType.create({productId: product.id, typeId});

        res.status(200).json(product);

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка создания продукта'})
    }
};

const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        
        const product = await Product.findAll({where: {id}, include: [{model: Type}, {model: Brand}]});

        res.status(200).json(product);

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка получения продукта'})
    }
};

const getProducts = async (req, res) => {
    try {    
        const products = await Product.findAll();

        res.status(200).json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка получения продуктов'})
    }
};

export {
    createProduct, getProduct, getProducts
}