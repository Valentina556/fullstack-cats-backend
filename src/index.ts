import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import breedsRouter from "./routes/breeds";
import imagesRouter from "./routes/images";
import usersRouter from "./routes/users";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/catsDB";

// Conexión a MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB conectado"))
        .catch((err: unknown) => {
          console.error("❌ Error conectando a MongoDB", err);
          process.exit(1);
        });

app.use("/api/breeds", breedsRouter);
app.use("/api", imagesRouter);        // expos: /api/imagesbybreedid
app.use("/api/users", usersRouter);


// Ruta de prueba
app.get("/", (_req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

