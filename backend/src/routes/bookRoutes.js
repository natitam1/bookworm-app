import express from "express";
import cloudinary from "../lib/cloudinary.js";

const router = express.Router();

router.post("/", protectRoute, async (req, res) => {
  try {
    const { title, caption, rating, image } = req.body;
    if (!title || !caption || !rating || !image) {
      return res.status(500).json({ message: "Please provide all fields" });
    }
    // Upload the image to cloudinary
    // Save to the database

    const uploadRepose = await cloudinary.uploader.upload(image);
    const imageUrl = uploadRepose.secure_url;

    const newBook = new Book({
      title,
      caption,
      rating,
      image: imageUrl,
      //   user: req.user._id,
    });

    await newBook.save();
    res.status(201).json({
      newBook,
    });
  } catch (error) {
    console.log("Error creating book", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
