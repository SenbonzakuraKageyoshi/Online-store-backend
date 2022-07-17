import {User} from '../models/models.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';

const register = async (req, res) => {
    try {
        const {name, surname, number, email, password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = await User.create({name, surname, number, email, passwordHash});

        const token = generateToken(user.dataValues.id)

        res.status(200).json({...user.dataValues, token});

    } catch (error) {
        res.status(500).json({message: 'Ошибка создания аккаунта'})
    };
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;


        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message: 'Пользователь не найден'});
        };

        const isValidPass = await bcrypt.compare(password, user.dataValues.passwordHash);

        if(!isValidPass){
            return res.status(403).json({message: 'Неверный логин или пароль'});
        };

        const token = generateToken(user.dataValues.id)

        res.status(200).json({...user.dataValues, token});

    } catch (error) {
        res.status(500).json({message: 'Ошибка создания аккаунта'})
    };
};

export {
    register, login
}