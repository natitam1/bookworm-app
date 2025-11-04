import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body();
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fids are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be at least 6 characters long" });
    }
    if (username.length < 3) {
      return res
        .status(400)
        .json({ message: "Username should be at least 3 characters long" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existingUsername = User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "User already exists" });
    }

    const profileImage = `https://api.dicebear.com/9.x/adventurer/svg?seed=${username}`;

    const user = new User({
      email,
      username,
      password,
      profileImage,
    });

    await user.save();
  } catch (error) {}
});
router.post("/login", async (req, res) => {
  res.send("Login");
});

export default router;
