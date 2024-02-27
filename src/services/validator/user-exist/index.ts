import { Users } from "../../../models/users";
import { Response } from "express";

const checkUserExist = async ({
  field,
  value,
  res,
}: {
  field: string;
  value: string;
  res: Response;
}) => {
  const user = await Users.findOne({ [field]: value });

  user && res.status(400).json({ message: `This ${field} is already in use` });
};

export default checkUserExist;
