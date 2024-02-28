import { checkFormFieldsExistsProps } from "@/types/services";

const checkFormFieldsExists = ({ fields, res }: checkFormFieldsExistsProps) => {
  if (!{ ...fields }) {
    res.status(400).json({ message: "Please add all fields" });
  }
};

export default checkFormFieldsExists;
