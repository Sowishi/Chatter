import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { getUserForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoutes, getUserForSidebar);

export default router;
