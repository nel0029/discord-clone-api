import { Users } from "@/models/users";
import { Response } from "express";

const searchUserExist = async ({
  field,
  value,
  res,
}: {
  field: string;
  value: string;
  res: Response;
}) => {
  const user = await Users.findOne({ [field]: value });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  return user;
};

export default searchUserExist;
