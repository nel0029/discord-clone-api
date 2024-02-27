import { CookieOptions } from "express";
import jwt from "jsonwebtoken";
import { TokenGeneratorProps } from "../../../types/middlewares";

const tokenGenerator = ({ res, id }: TokenGeneratorProps) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  const cookiesOptions: CookieOptions = {
    httpOnly: true,
    secure: process.env.HTTP_ONLY_SECURE === "true",
    sameSite: "none",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  };

  res.cookie("token", token, cookiesOptions);
};

export default tokenGenerator;
