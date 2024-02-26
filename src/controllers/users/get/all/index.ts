import expressAsynHandler from "express-async-handler";

export const getUserList = expressAsynHandler(async (req, res) => {
  res.status(200).json({ message: "USERS FOUND" });
});
