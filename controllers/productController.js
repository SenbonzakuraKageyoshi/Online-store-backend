import { Product } from "../models/models.js";
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

        res.status(200).json(product);

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Ошибка создания продутка'})
    }
};

export {
    createProduct
}