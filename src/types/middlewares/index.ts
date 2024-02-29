import { Response } from "express";

export interface ITokenGeneratorProps {
  id: string;
  res: Response;
}
