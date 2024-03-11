import { searchUserExist } from "@/middlewares";
import expressAsyncHandler from "express-async-handler";

const getUserById = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const User = await searchUserExist({
    field: "_id",
    value: id,
    field_exceptions: ["password", "__v", "bio"],
  });

  if (User) {
    res.status(200).json({ message: "USER FOUND", data: User });
  } else {
    res.status(404).json({ message: "USER NOT FOUND" });
  }
});

export default getUserById;
