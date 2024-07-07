import express from "express";
import { getMe, login, signup } from "../controller/auth.js";
import { protectRoute } from "../middlewares/ProtectRoute.js";

const router = express.Router();
router.route("/me").get(getMe);
router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
