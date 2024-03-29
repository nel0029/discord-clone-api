import { Response } from "express";
import { Document } from "mongoose";

export interface IRegistrationFieldsValues {
  name: string;
  user_name: string;
  email: string;
  password: string;
}
export interface ICheckFormFieldsExistsProps {
  fields: { [key: string]: string };
  res: Response;
}
export interface IFieldsRemoverProps {
  document: Document;
  fields: string[];
}
