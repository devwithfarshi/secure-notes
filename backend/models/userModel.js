import { model, Schema } from "mongoose";

const userModel = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    refresh_token: {
      type: String,
      default: "",
    },

    // Profile-related fields
    name: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      default: "",
    },
    avatar: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userModel);
export default User;
