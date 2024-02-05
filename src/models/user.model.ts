import { model, Schema, Document, Types } from "mongoose";
import { IUser, Role } from "@interfaces/user.interface";

export type UserDocument = IUser & Document;

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    birthDate: Date,
    verifiedEmail: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    following: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    savePost: [
      {
        type: Types.ObjectId,
        ref: "Post",
      },
    ],
    accountTyoe: {
      type: String,
      enum: ["public", "private"],
      default: "public",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<UserDocument>("User", userSchema);

export default userModel;
