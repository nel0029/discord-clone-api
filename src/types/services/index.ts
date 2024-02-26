import { Response } from "express";

export interface RegistrationFieldsValues {
  name: string;
  user_name: string;
  email: string;
  password: string;
}
export interface CheckValidRegistrationFieldsProps {
  fields: RegistrationFieldsValues;
  res: Response;
}
