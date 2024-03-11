import { searchUserExist } from "@/middlewares";
import { fieldsRemover } from "@/services";
import expressAsyncHandler from "express-async-handler";

const checkValidUserId = expressAsyncHandler(async (req, res, next) => {
  const { userId } = req.query;

  const User = await searchUserExist({
    field: "_id",
    value: userId.toString(),
  });

  if (userId && User) {
    const Client = fieldsRemover({
      document: User,
      fields: ["password", "tokens"],
    });

    req.body.client = Client;

    next();
  } else {
    res.status(401).json({ message: "UserId not found" });
  }
});

export default checkValidUserId;
