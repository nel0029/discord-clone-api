import { IFieldsRemoverProps } from "@/types/services";

const fieldsRemover = ({ document, fields }: IFieldsRemoverProps) => {
  const newObject = document.toObject();

  for (const field of fields) {
    delete newObject[field];
  }

  return newObject;
};

export default fieldsRemover;
