import { CheckValidRegistrationFieldsProps } from "../../../types/services";

export const checkValidRegistrationFields = ({
  fields,
  res,
}: CheckValidRegistrationFieldsProps) => {
  if (!{ ...fields }) {
    res.status(400).json({ message: "Please add all fields" });
  }
};
