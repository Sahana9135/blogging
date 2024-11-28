import React from 'react';
import { useLocation } from 'react-router-dom';

function PostDetail() {
  const { state } = useLocation();
  const post = state?.post;

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <p>
        <strong>Category:</strong> {post.category}
      </p>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Date:</strong> {post.date}
      </p>
    </div>
  );
}

export default PostDetail;
