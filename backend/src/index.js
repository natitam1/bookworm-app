import express from "express";
import "dotenv/config";
const PORT = process.env.PORT;
const app = express();

app.listen(3000, () => [
  console.log(`Server is running on http://localhost:${3000}`),
]);
