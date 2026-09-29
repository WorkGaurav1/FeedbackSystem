import express from "express";

import AuthController from "../controllers/authController.js";

const router = express.Router();

/**
 * Register Employee
 */
router.post(
  "/register",
  AuthController.register
);

/**
 * Login Employee
 */
router.post(
  "/login",
  AuthController.login
);

export default router;