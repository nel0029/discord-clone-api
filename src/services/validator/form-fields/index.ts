import { ICheckFormFieldsExistsProps } from "@/types/services";

const checkFormFieldsExists = ({
  fields,
  res,
}: ICheckFormFieldsExistsProps) => {
  if (!{ ...fields }) {
    res.status(400).json({ message: "Please add all fields" });
  }
};

export default checkFormFieldsExists;
