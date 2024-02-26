import bcrypt from "bcryptjs";

export const hashedPasswordGenerator = async ({
  password,
}: {
  password: string;
}) => {
  const salt = await bcrypt.genSalt(10);
  const newHashedPassword = await bcrypt.hash(password, salt);

  return newHashedPassword;
};
