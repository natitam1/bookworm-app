import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, caption, rating, image } = req.body;
    if (!title || !caption || !rating || !image) {
      return res.status(500).json({ message: "Please provide all fields" });
    }
  } catch (error) {}
});

export default router;
