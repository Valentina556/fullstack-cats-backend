// src/routes/breeds.ts
import { Router } from "express";
import { getBreeds, searchBreeds, getBreedById } from "../controllers/breedsController";

const router = Router();

// GET /api/breeds
router.get("/", getBreeds);

// GET /api/breeds/search?q=xxx
router.get("/search", searchBreeds);

// GET /api/breeds/:breed_id
router.get("/:breed_id", getBreedById);

export default router;
