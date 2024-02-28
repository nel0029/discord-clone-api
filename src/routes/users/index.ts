import express from "express";

import { getUserList, registerNewUser } from "@/controllers/users";
import { checkValidUserId } from "@/middlewares";

const router = express.Router();

router.post("/register", registerNewUser);

router.use(checkValidUserId);
router.get("/all", getUserList);

export default router;
