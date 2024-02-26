import expressAsyncHandler from "express-async-handler";

export const checkValidUserId = expressAsyncHandler(async (req, res, next) => {
  const { userId } = req.query;

  if (userId) {
    req.query.userId = userId;

    next();
  } else {
    res.status(401).json({ message: "No user id provided" });
  }
});
