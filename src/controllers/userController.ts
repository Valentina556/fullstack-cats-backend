// src/controllers/userController.ts
import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function register(req: Request, res: Response) {
  try {
    const username = String(req.body.username || "");
    const email = String(req.body.email || "");
    const password = String(req.body.password || "");

    if (!username || !email || !password) {
      return res.status(400).json({ message: "username, email and password are required" });
    }

    const user = await userService.registerUser(username, email, password);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const username = String(req.body.username || "");
    const password = String(req.body.password || "");

    if (!username || !password) {
      return res.status(400).json({ message: "username and password required" });
    }

    const user = await userService.loginUser(username, password);
    res.json(user);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
}
