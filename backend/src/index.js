import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => [
  console.log(`Server is running on http://localhost:${PORT}`),
]);
