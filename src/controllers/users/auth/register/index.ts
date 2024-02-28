import expressAsyncHandler from "express-async-handler";

import { Request, Response } from "express";

import { Users } from "@/models/users";

import { tokenGenerator, hashedPasswordGenerator } from "@/middlewares";
import { checkUserExist, checkFormFieldsExists } from "@/services";

const registerNewUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      user_name,
      email,
      password,
      bio,
      profile_picture,
      privacy_type,
    } = req.body;

    checkFormFieldsExists({
      fields: { name, user_name, email, password },
      res,
    });

    checkUserExist({
      field: "email",
      value: email,
      res,
    });

    const hashedPassword = await hashedPasswordGenerator({ password });

    const newUser = await Users.create({
      name,
      user_name,
      email,
      password: hashedPassword,
      bio,
      profile_picture,
      privacy_type,
    });

    const { password: _, ...newUserWithoutPassword } = newUser.toObject();

    tokenGenerator({ res, id: newUser?._id?.toString() });

    res
      .status(200)
      .json({ message: "New user created", new_user: newUserWithoutPassword });
  }
);

export default registerNewUser;
