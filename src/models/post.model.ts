import { model, Schema, Document, Types } from "mongoose";
import { IUser, Role } from "@interfaces/user.interface";

export type UserDocument = IUser & Document;

const commentSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  message: String,
});

const userSchema: Schema = new Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    likes: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const userModel = model<UserDocument>("User", userSchema);

export default userModel;
