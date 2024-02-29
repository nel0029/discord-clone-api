import express from "express";

const AuthRouter = express.Router();

import { registerNewUser, logInUser } from "@/controllers/users";

AuthRouter.post("/register", registerNewUser);
AuthRouter.post("/log-in", logInUser);

export default AuthRouter;
