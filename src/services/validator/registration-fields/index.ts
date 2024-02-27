import { CheckValidRegistrationFieldsProps } from "../../../types/services";

const checkValidRegistrationFields = ({
  fields,
  res,
}: CheckValidRegistrationFieldsProps) => {
  if (!{ ...fields }) {
    res.status(400).json({ message: "Please add all fields" });
  }
};

export default checkValidRegistrationFields;
