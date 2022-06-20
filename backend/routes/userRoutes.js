import express from "express";
import {
  registerUser,
  getUsers,
  loginUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.route("/login").post(loginUser);

export default router;
