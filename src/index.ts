import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import { connectDB } from "@/configs";
import { errorHandler } from "@/middlewares";
import { userRoutes, serverRoutes } from "@/routes";

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    credentials: true,
  })
);
app.use(errorHandler);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/servers", serverRoutes);

server.listen(8080);
