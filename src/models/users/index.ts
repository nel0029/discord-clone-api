import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  user_name: { type: String },
  email: { type: String },
  password: { type: String },
  bio: { type: String, default: "" },
  profile_picture: {
    id: {
      type: String,
      default: process.env.DEFAULT_PROFILE_PICTURE_ID,
    },
    url: {
      type: String,
      default: process.env.DEFAULT_PROFILE_PICTURE_URL,
    },
  },
  privacy_type: {
    type: Number,
    default: process.env.DEFAULT_PRIVACY_TYPE,
  },
});

const Users = mongoose.model("Users", UserSchema);

export { Users };
