import handleValidationErrors from "../utils/handleValidationsErrors.js";
import { adminAuth } from "../utils/adminCheck.js";
import authCheck  from "../utils/authCheck.js";
import { brandValidation } from "../validations/validations.js";
import { createBrand, getBrands } from "../controllers/brandController.js";
import { Router } from "express";

const router = new Router();    

router.post('/create', adminAuth, brandValidation, handleValidationErrors, createBrand);
router.get('/all-brands', authCheck, getBrands);

export default router;