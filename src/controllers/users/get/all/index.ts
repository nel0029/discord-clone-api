import asyncHandler from "express-async-handler";

export const getUserList = asyncHandler(async (req, res) => {
  const { userId } = req.query;

  console.log("UserId: ", userId);
  res.status(200).json({ message: "USERS FOUND" });
});
