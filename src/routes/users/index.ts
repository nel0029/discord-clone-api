import express from "express";

import { getUserList } from "../../controllers/users/get/all";
import { checkValidUserId } from "../../middlewares/validator/users";
import createNewUser from "../../controllers/users/create/new-user";

const router = express.Router();

router.post("/new", createNewUser);

router.use(checkValidUserId);
router.get("/all", getUserList);

export default router;
