import { Users } from "@/models/users";

import {
  ISearchUserExistProps,
  ISearchUserExistExceptions,
} from "@/types/controllers";

const searchUserExist = async ({
  field,
  value,
  field_exceptions,
}: ISearchUserExistProps) => {
  let exceptions: ISearchUserExistExceptions = {};

  if (field_exceptions) {
    for (const field_exception of field_exceptions) {
      exceptions[field_exception] = 0;
    }

    const User = await Users.findOne({ [field]: value }, exceptions);

    return User;
  } else {
    const User = await Users.findOne({ [field]: value });

    return User;
  }
};

export default searchUserExist;
