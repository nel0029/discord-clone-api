import expressAsyncHandler from "express-async-handler";

import { Request, Response } from "express";

import { Users } from "@/models/users";

import {
  tokenGenerator,
  hashedPasswordGenerator,
  searchUserExist,
} from "@/middlewares";
import { checkFormFieldsExists, fieldsRemover } from "@/services";

const createNewUser = expressAsyncHandler(
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

    const ExistedEmail = await searchUserExist({
      field: "email",
      value: email,
    });

    const ExistedUserName = await searchUserExist({
      field: "user_name",
      value: user_name,
    });

    if (ExistedEmail || ExistedUserName) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const hashedPassword = await hashedPasswordGenerator({ password });

      const NewUser = await Users.create({
        name,
        user_name,
        email,
        password: hashedPassword,
        bio,
        profile_picture,
        privacy_type,
      });

      const CreatedUser = fieldsRemover({
        document: NewUser,
        fields: ["password"],
      });

      tokenGenerator({ res, id: NewUser?._id?.toString() });

      res
        .status(200)
        .json({ message: "New user created", new_user: CreatedUser });
    }
  }
);

export default createNewUser;
