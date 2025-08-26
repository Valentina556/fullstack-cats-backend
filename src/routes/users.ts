// src/routes/users.ts
import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

// usamos POST en lugar de GET para seguridad, para no exponer las credenciales en la URL
router.post("/register", userController.register);
router.post("/login", userController.login);

export default router;
