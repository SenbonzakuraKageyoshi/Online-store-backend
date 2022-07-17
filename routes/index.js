import { Router } from "express";
import userRouter from './userRouter.js';
import typeRouter from './typeRouter.js';
import brandRouter from './brandRouter.js';
import productRouter from './productRouter.js'

const router = new Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);
router.use('/brand', brandRouter);

export default router;