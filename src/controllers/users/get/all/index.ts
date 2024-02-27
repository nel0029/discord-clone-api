import expressAsyncHandler from "express-async-handler";

const getUserList = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "USERS FOUND" });
});

export default getUserList;
