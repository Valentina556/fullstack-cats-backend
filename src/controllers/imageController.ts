// src/controllers/imageController.ts
import { Request, Response } from "express";
import * as catService from "../services/catApiService";

// GET /api/imagesbybreedid?breed_id=abc&limit=5
export const getImagesByBreedId = async (req: Request, res: Response) => {
  try {
    const breedId = String(req.query.breed_id || "");
    const limit = Number(req.query.limit || 8);

    if (!breedId) {
      return res.status(400).json({ message: "query param 'breed_id' is required" });
    }

    const imgs = await catService.getImagesByBreedId(breedId, limit);
    res.json(imgs);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "error fetching images" });
  }
};
