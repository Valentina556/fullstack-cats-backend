// src/models/User.ts
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: () => new Date() },
});

export default model<IUser>("User", userSchema);
