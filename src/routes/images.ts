// src/routes/images.ts
import { Router } from "express";
import { getImagesByBreedId } from "../controllers/imageController";

const router = Router();

// GET /api/imagesbybreedid
router.get("/imagesbybreedid", getImagesByBreedId);

export default router;
