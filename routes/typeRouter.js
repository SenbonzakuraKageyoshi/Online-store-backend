import handleValidationErrors from "../utils/handleValidationsErrors.js";
import { adminAuth } from "../utils/adminCheck.js";
import authCheck  from "../utils/authCheck.js";
import { typeValidation } from "../validations/validations.js";
import { createType, getTypes } from "../controllers/typeController.js";
import { Router } from "express";

const router = new Router();    

router.post('/create', adminAuth, typeValidation, handleValidationErrors, createType);
router.post('/all-types', authCheck, getTypes);

export default router;