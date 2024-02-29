import { Users } from "@/models/users";

import { ISearchUserExistProps } from "@/types/services";

const searchUserExist = async ({
  field,
  value,
  res,
}: ISearchUserExistProps) => {
  const User = await Users.findOne({ [field]: value });

  if (!User) {
    res.status(404).json({ message: "User not found" });
  }

  return User;
};

export default searchUserExist;
