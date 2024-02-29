import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import { Request, Response } from "express";

import { tokenGenerator } from "@/middlewares";

import { checkFormFieldsExists, searchUserExist } from "@/services";

const logInUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  checkFormFieldsExists({
    fields: { email, password },
    res,
  });

  const User = await searchUserExist({
    field: "email",
    value: email,
    res,
  });

  if (User && (await bcrypt.compare(password, User.password))) {
    tokenGenerator({ res, id: User._id.toString() });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

export default logInUser;
