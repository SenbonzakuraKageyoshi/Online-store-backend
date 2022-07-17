import {body} from 'express-validator';

export const loginValidation = [
    body('email', 'Введите Email').isEmail(),
    body('password', 'Введите пароль (не менее 6 символов)').isLength({ min: 6}),
];

export const registerValidation = [
    body('name', 'Введите имя (не менее 2 символов)').isLength({ min: 2 }),
    body('surname', 'Введите фамилию (не менее 2 символов)').isLength({ min: 2 }),
    body('number', 'Введите номер (11 символов)').isLength({ min: 11, max: 11 }),
    body('email', 'Введите Email').isEmail(),
    body('password', 'Введите пароль (не менее 6 символов)').isLength({ min: 6}),
];

export const typeValidation = [
    body('name', 'Введите название категории (не менее 2 символов)').isLength({ min: 2 }),
];