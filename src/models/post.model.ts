import { model, Schema, Document, Types } from "mongoose";
import { IPost } from "@interfaces/post.interface";

export type PostDocument = IPost & Document;

const commentSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  message: String,
});

const postSchema: Schema = new Schema(
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

const postModel = model<PostDocument>("Post", postSchema);

export default postModel;
