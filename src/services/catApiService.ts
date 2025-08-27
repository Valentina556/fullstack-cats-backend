// src/services/catApiService.ts
import axios from "axios";

const CAT_API_BASE = "https://api.thecatapi.com/v1";

const api = axios.create({
  baseURL: CAT_API_BASE,
  headers: {
    "x-api-key": process.env.THECATAPI_KEY || "",
  },
  timeout: 8000,
});

export async function getBreeds() {
  const res = await api.get("/breeds");
  return res.data;
}

export async function getBreedById(breedId: string) {
  const res = await api.get(`/breeds/${breedId}`);
  return res.data;
}

export async function searchBreeds(query: string) {
  const res = await api.get("/breeds/search", { params: { q: query } });
  return res.data;
}

export async function getImagesByBreedId(breedId: string, limit = 8) {
  const res = await api.get("/images/search", { params: { breed_id: breedId, limit } });
  return res.data; 
}
