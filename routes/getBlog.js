const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogs');

router.get('/getBlog', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

module.exports = router;
