import React from 'react';
import './Face.css';
import Alt from '../../Header/Alter/Alt';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Face() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      alert("You are Sign into our Blog website. And Please Create your Account.")
      navigate('/newaccount');
      };
    return (
        <>
        <Alt />
        <section id="facebook-section" class="facebook-section">
            <div className="fcontainer">
                <form onSubmit={handleSubmit}>
                <h1><i class="fa-brands fa-facebook fa-lg"></i>acebook</h1>
                <br /><br /><br /><br />
                <div className="fip">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your mail id" required />
                    <br />
                    <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder="Password" required />
                </div>
                <br />
                <button>Sign in</button>
                </form>
            </div>
            </section>
        </>
    )
}

export default Face;