import express from "express";

import { getUserList, createNewUser } from "@/controllers/users";

import { checkValidUserId } from "@/middlewares";

const UsersRouter = express.Router();

UsersRouter.use(checkValidUserId);
UsersRouter.post("/new", createNewUser);
UsersRouter.get("/all", getUserList);

export default UsersRouter;
