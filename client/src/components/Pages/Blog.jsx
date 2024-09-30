import React, { useState, useEffect } from "react";
import eleven from "../../assets/img/blog.svg";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Blog() {
  const { blogId } = useParams();
  const [topBlogs, setTopBlogs] = useState([]);
  const [blogContent, setBlogContent] = useState("This is a blog");
  const [blogTitle, setBlogTitle] = useState("Title");
  const [blogAuthor, setBlogAuthor] = useState("Author");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://iblog-43mo.onrender.com/getBlog`);
        const blogs = response.data;

        setTopBlogs(blogs.filter((blog) => blog._id !== blogId));

        const {
          content: blogContent,
          title: blogTitle,
          author: blogAuthor,
        } = blogs.find((blog) => blog._id === blogId) || {};

        setBlogContent(blogContent);
        setBlogTitle(blogTitle);
        setBlogAuthor(blogAuthor);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [blogId]);

  return (
    <>
      <div className="post-img">
        <img src={eleven} alt="11th image" className="w-100" />
      </div>
      <div className="container mt-3">
        <h1 className="font1">{blogTitle}</h1>
        <div className="d-flex justify-content-between my-2 font3">
          <div className="author-info">
            <div>
              <strong>by {blogAuthor}</strong>
            </div>
            <div>{Math.ceil(blogContent.length / 1000)} min read</div>
          </div>
          <div className="social-logo d-sm-block d-none">
            <i className="fa-brands fa-square-twitter"></i>{" "}
            <i className="fa-brands fa-linkedin"></i>{" "}
            <i className="fa-brands fa-square-facebook"></i>
          </div>
        </div>
        <p className="font2" style={{textAlign:"justify"}}>{blogContent}</p>
      </div>
      <div className="home-articles container p-3 font3">
        <h2 className="text-center">People who read this also read</h2>
        <div className="d-md-flex text-center justify-content-between gap-3 px-3">
          {topBlogs.map((topBlog) => (
            <div className="featured-articles p-3 mx-auto mb-2" key={topBlog._id}>
              <div className="home-article-img w-100">
                <img
                  src={`https://picsum.photos/200/100?random=${topBlog._id}`}
                  alt="article-image"
                  className="w-100"
                />
              </div>
              <div className="home-article-content font2">
                <Link
                  to={`/blog/${topBlog._id}`}
                  className="text-decoration-none"
                >
                  <h3 className="blog-title text-dark mt-3 lh-1">
                    {topBlog.title}
                  </h3>
                </Link>
                <div className="lh-1">
                  by {topBlog.author} |{" "}
                  {Math.ceil(topBlog.content.length / 1000)} min read
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
