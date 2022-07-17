import handleValidationErrors from "../utils/handleValidationsErrors.js";
import { adminAuth } from "../utils/adminCheck.js";
import authCheck  from "../utils/authCheck.js";
import { productValidation } from "../validations/validations.js";
import { createProduct } from "../controllers/productController.js";
import { Router } from "express";

const router = new Router();    

router.post('/create', adminAuth, productValidation, handleValidationErrors, createProduct);
// router.get('/all-types', authCheck, getTypes);

export default router;