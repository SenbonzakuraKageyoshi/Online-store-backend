import jwt from 'jsonwebtoken';
import { User } from '../models/models.js';

import dotenv from 'dotenv';
dotenv.config();

export const adminAuth = async (req, res, next) => {
    if(req.method === 'OPTIONS'){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token) {
            return res.status(403).json({message: 'Нет доступа'})
        }

        const {id} = jwt.verify(token, 'secret');
        
        const user = await User.findOne({where: {id}})

        if(!user && user.dataValues.id !== process.env.ADMIN_ID && user.dataValues.email !== process.env.ADMIN_EMAIL){
            return res.status(403).json({message: 'Нет доступа'})
        }

        next();
    } catch (error) {
        res.status(500).json({message: 'Ошибка при проверке доступа'})
    }
}