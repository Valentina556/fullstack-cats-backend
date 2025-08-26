// src/controllers/breedsController.ts
import { Request, Response } from "express";
import * as catService from "../services/catApiService";

export const getBreeds = async (_req: Request, res: Response): Promise<void> => {
  try {
    const breeds = await catService.getBreeds();
    res.json(breeds);
  } catch (err: any) {
    console.error("getBreeds error:", err);
    res.status(500).json({ error: err.message || "error fetching breeds" });
  }
};

export const searchBreeds = async (req: Request, res: Response): Promise<void> => {
  try {
    const q = String(req.query.q || "").trim();
    if (!q) {
      res.status(400).json({ message: "query param 'q' is required" });
      return;
    }
    const results = await catService.searchBreeds(q);
    res.json(results);
  } catch (err: any) {
    console.error("searchBreeds error:", err);
    res.status(500).json({ error: err.message || "error searching breeds" });
  }
};

export const getBreedById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { breed_id } = req.params;
    if (!breed_id) {
      res.status(400).json({ message: "breed_id param is required" });
      return;
    }

    const breed = await catService.getBreedById(breed_id);
    if (!breed) {
      res.status(404).json({ message: "breed not found" });
      return;
    }

    res.json(breed);
  } catch (err: any) {
    console.error("getBreedById error:", err);
    res.status(500).json({ error: err.message || "error fetching breed" });
  }
};
