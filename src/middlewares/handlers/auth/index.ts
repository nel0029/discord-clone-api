import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import jwt, { JwtPayload } from "jsonwebtoken";

const checkIsValidToken = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

        if (Date.now() >= decoded.exp * 1000) {
          res.status(401).json({ message: "Token has expired" });
        }

        next();
      } catch (error) {
        res.status(401).json({ message: "Not authorized" });
      }
    } else {
      res
        .status(401)
        .json({ message: "No token generated because you are not authorized" });
    }
  }
);

export default checkIsValidToken;
