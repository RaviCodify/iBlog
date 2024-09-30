const express = require("express");
const router = express.Router();
const Blog = require("../models/Blogs");

router.post("/create", async (req, res) => {
  try {
    const { title, author, content } = req.body;
    if (!title || !author || !content) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newBlogPost = new Blog({title, author, content});
    const savedBlog = await newBlogPost.save();
    return res.status(201).json({message: "Blog posted!"});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
