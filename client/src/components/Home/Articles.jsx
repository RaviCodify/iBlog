import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Articles() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/getBlog"
      )
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);
  return (
    <>
      <div className="home-articles container py-3">
        <h2 className="text-center">Featured Articles</h2>
        <div className="justify-content-center d-flex flex-wrap">
          {blogs.map((blog) => (
            <div className="home-article" key={blog._id}>
            <div className="home-article-img mx-auto">
            <img src={`https://picsum.photos/200/100?random=${blog._id}`} alt="article-image" className="w-100"/>
            </div>
            <div className="home-article-content d-flex flex-column align-items-center mt-2">
            <Link to={`/blog/${blog._id}`} className="text-decoration-none">
                <h3 className="blog-title text-dark">{blog.title}</h3>
              </Link>

              <div>by {blog.author} | {Math.ceil(blog.content.length/1000)} min read</div>
              <div></div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default Articles;
