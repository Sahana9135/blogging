import React, { useState } from 'react';
import './Sub.css';


function Sub() {
    const [email, setEmail] = useState("");
        const responseMessage = document.getElementById('newsletterResponse');

    const handleSubmit = (e) => {
        e.preventDefault();
              
      
        if (email) {
          responseMessage.textContent = 'Thank you for subscribing!';
          responseMessage.style.color = 'lightgreen';
        } else {
          responseMessage.textContent = 'Please enter a valid email.';
          responseMessage.style.color = 'red';
        }
      };
      
  return (
    <>
    <section class="newsletter">
    <h2>Subscribe to our Newsletter</h2>
    <form id="newsletterForm" onSubmit={handleSubmit}>
      <input type="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
    <p id="newsletterResponse"></p>
  </section>
    </>
  )
}

export default Sub;