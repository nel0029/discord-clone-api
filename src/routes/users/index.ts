import express from "express";

import { getUserList, createNewUser } from "@/controllers/users";
import { checkValidUserId } from "@/middlewares";

const router = express.Router();

router.post("/new", createNewUser);

router.use(checkValidUserId);
router.get("/all", getUserList);

export default router;
