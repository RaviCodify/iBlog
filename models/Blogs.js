const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  }
);

// Create the Blog model
const Blog = mongoose.model("Blog", BlogSchema, "blogs");

module.exports = Blog;
