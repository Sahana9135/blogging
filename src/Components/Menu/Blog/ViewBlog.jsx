import React from 'react';
import { Link } from 'react-router-dom';
import './ViewBlog.css';

function ViewBlog({ blog }) {
  if (!blog) {
    return (
      <div className="no-blog">
        <h1>No Blog Found</h1>
        <Link to="/">Create a Blog</Link>
      </div>
    );
  }

  return (
    <div className="view-blog">
      <h1>{blog.title}</h1>
      {blog.image && <img src={blog.image} alt="Blog" />}
      <p>
        <strong>Category:</strong> {blog.category}
      </p>
      <p>
        <strong>Description:</strong> {blog.description}
      </p>
      <div>
        <strong>Content:</strong>
        <p>{blog.content}</p>
      </div>
      <Link to="/blog">View All Blog Posts  - &gt;</Link>
    </div>
  );
}

export default ViewBlog;
