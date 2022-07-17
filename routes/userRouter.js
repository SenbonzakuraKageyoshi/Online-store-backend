import handleValidationErrors from "../utils/handleValidationsErrors.js";
import { loginValidation, registerValidation } from "../validations/validations.js";
import { register, login } from "../controllers/userController.js";
import { Router } from "express";

const router = new Router();    

router.post('/register', registerValidation, handleValidationErrors, register);
router.post('/login', loginValidation, handleValidationErrors, login);

export default router;