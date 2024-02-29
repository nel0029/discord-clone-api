import { Response } from "express";

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

export interface ISearchUserExistProps {
  field: string;
  value: string;
  res: Response;
}
