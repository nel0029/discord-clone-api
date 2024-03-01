import express from "express";

const AuthRouter = express.Router();

import { createNewUser, logInUser } from "@/controllers/users";

AuthRouter.post("/register", createNewUser);
AuthRouter.post("/log-in", logInUser);

export default AuthRouter;
