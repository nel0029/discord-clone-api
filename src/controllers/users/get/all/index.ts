import { Users } from "@/models/users";
import expressAsyncHandler from "express-async-handler";

const getUserList = expressAsyncHandler(async (req, res) => {
  const UserList = await Users.find({}, { password: 0, __v: 0 });
  res.status(200).json({ message: "USERS FOUND", data: UserList });
});

export default getUserList;
