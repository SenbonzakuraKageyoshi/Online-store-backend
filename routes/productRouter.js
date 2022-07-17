import handleValidationErrors from "../utils/handleValidationsErrors.js";
import { adminAuth } from "../utils/adminCheck.js";
import authCheck  from "../utils/authCheck.js";
import { productValidation } from "../validations/validations.js";
import { createProduct, getProduct, getProducts } from "../controllers/productController.js";
import { Router } from "express";

const router = new Router();    

router.post('/create', adminAuth, productValidation, handleValidationErrors, createProduct);
router.get('/all-products', authCheck, getProducts);
router.get('/:id', authCheck, getProduct);

export default router;