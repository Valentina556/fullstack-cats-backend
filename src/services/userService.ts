// src/services/userService.ts
import User, { IUser } from "../models/User";
import bcrypt from "bcryptjs";

export async function registerUser(username: string, email: string, password: string) {
  const exists = await User.findOne({ username });
  if (exists) throw new Error("username already exists");

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashed });
  await user.save();

  return { id: user._id, username: user.username, email: user.email };
}

export async function loginUser(username: string, password: string) {
  const user = await User.findOne({ username });
  if (!user) throw new Error("invalid credentials");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("invalid credentials");

  return { id: user._id, username: user.username, email: user.email };
}
