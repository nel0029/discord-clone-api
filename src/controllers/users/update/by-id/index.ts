import { searchUserExist } from "@/middlewares";
import expressAsyncHandler from "express-async-handler";

const updateUserById = expressAsyncHandler(async (req, res) => {
  const { id, name, user_name, email, bio, profile_picture, privacy_type } =
    req.body;
  const ExistedUser = await searchUserExist({
    field: "_id",
    value: id,
    field_exceptions: ["password", "__v"],
  });

  if (!ExistedUser) {
    res.status(404).json({ message: "USER NOT FOUND" });
  } else {
    ExistedUser.name = name || ExistedUser.name;
    ExistedUser.user_name = user_name || ExistedUser.user_name;
    ExistedUser.email = email || ExistedUser.email;
    ExistedUser.bio = bio || ExistedUser.bio;
    ExistedUser.profile_picture =
      profile_picture || ExistedUser.profile_picture;
    ExistedUser.privacy_type = privacy_type || ExistedUser.privacy_type;
    await ExistedUser.save();
    res.status(200).json({ message: "USER UPDATED", data: ExistedUser });
  }
});

export default updateUserById;
