import express from "express";
import { getLeetcodeStats } from "../controllers/leetcodeController.js";

const router = express.Router();

router.get("/:username", getLeetcodeStats);

export default router;
