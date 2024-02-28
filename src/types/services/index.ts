import { Response } from "express";

export interface RegistrationFieldsValues {
  name: string;
  user_name: string;
  email: string;
  password: string;
}
export interface checkFormFieldsExistsProps {
  fields: { [key: string]: string };
  res: Response;
}
