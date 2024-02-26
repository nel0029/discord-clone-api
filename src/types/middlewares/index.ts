import { Response, Request } from "express";

export interface TokenGeneratorProps {
  id: string;
  res: Response;
}
