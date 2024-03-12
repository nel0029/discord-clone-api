import express from "express";

import {
  getUserList,
  createNewUser,
  getUserById,
  updateUserById,
} from "@/controllers/users";

import { checkValidUserId, checkIsValidToken } from "@/middlewares";

const UsersRouter = express.Router();

UsersRouter.use(checkValidUserId);
UsersRouter.use(checkIsValidToken);
UsersRouter.post("/new", createNewUser);
UsersRouter.get("/all", getUserList);
UsersRouter.get("/by-id/:id", getUserById);
UsersRouter.put("/update/by-id", updateUserById);

export default UsersRouter;
