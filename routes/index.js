import { Router } from "express";
import userRouter from './userRouter.js';
import typeRouter from './typeRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
// router.use('/product');
// router.use('/brand');

export default router;