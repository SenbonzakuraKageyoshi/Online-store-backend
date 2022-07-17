import handleValidationErrors from "../utils/handleValidationsErrors.js";
import { adminAuth } from "../utils/adminCheck.js";
import authCheck  from "../utils/authCheck.js";
import { brandValidation } from "../validations/validations.js";
import { createType, getTypes, getType } from "../controllers/typeController.js";
import { Router } from "express";

const router = new Router();    

router.post('/create', adminAuth, brandValidation, handleValidationErrors, createType);
router.get('/all-types', authCheck, getTypes);
router.get('/:id', authCheck, getType);

export default router;