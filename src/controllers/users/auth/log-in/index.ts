import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import { Request, Response } from "express";

import { tokenGenerator } from "@/middlewares";

import { checkFormFieldsExists } from "@/services";
import { searchUserExist } from "@/middlewares";
import fieldsRemover from "@/services/remover/fields";

const logInUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  checkFormFieldsExists({
    fields: { email, password },
    res,
  });

  const User = await searchUserExist({
    field: "email",
    value: email,
  });

  if (User && (await bcrypt.compare(password, User.password))) {
    tokenGenerator({ res, id: User._id.toString() });
    const LoggedInUser = fieldsRemover({
      document: User,
      fields: ["password"],
    });

    res.status(200).json({ message: "LOGGED IN", user: LoggedInUser });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

export default logInUser;
