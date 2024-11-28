import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateBlog.css';

function CreateBlog({ setBlog }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
    image: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlog(formData);
    navigate('/view');
  };

  return (
    <div className="create-blog">
      <h1>Create a Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Upload Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
