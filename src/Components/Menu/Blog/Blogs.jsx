import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';

function Blogs() {

  return (
    <>
      <header class="background">
        <div class="content">
          <h1 class="heading">
            <span class="small">Welcome in the world of</span>blog<span class="no-fill">&nbsp;writing</span>
          </h1>

          <a href="blog-create.html" class="btn">Write a Blog</a>
        </div>
      </header>
      {/* <!-- Explore Posts Section --> */}
      <section id="explore-posts" class="explore-posts-section">
        <h2>Explore Our Latest Posts</h2>
        <p>Discover articles from a variety of topics and authors.</p>

        {/* <!-- Category Filter --> */}
        <div class="category-filter">
          <button onclick="filterPosts('All')">All</button>
          <button onclick="filterPosts('Technology')">Technology</button>
          <button onclick="filterPosts('Programming')">Programming</button>
          <button onclick="filterPosts('Design')">Design</button>
          <button onclick="filterPosts('Lifestyle')">Lifestyle</button>
          <button onclick="filterPosts('Sports')">Sports</button>
        </div>

        {/* <!-- Post Grid --> */}
        <div className="post-grid">
          {/* <!-- Sample Post Card --> */}
          <div className="post-card" data-category="Technology" >
            <a to="">
              <img src="technology.jpg" alt="Technology Post" />
              <div className="post-content">
                <h3>Future of AI Technology</h3>
                <p className="post-description">Exploring the latest advancements in AI and how they are changing the
                  world.</p>
                <span className="post-category">Technology</span> | <span className="post-author">By Author Bhuvana</span> | <span
                  className="post-category">24 Oct 2024</span>
          </div>
          </a>
        </div>

        <div className="post-card" data-category="Programming">
          <a href="bhuvana.html">
            <img src="program.jpg" alt="Programming Post" />
              <div className="post-content">
                <h3>JavaScript ES6 Features</h3>
                <p className="post-description">A guide to the latest JavaScript ES6 features every developer should
                  know.</p>
                <span className="post-category">Programming</span> | <span class="post-author">By Author Harshini</span> | <span
                  class="post-category">9 Jan 2024</span>
            </div>
            </a>
        </div>
        <div class="post-card" data-category="Technology">
          <a href="bhuvana.html">
            <img src="ai.jpg" alt="Technology Post" />
              <div class="post-content">
                <h3>Future of AI Technology</h3>
                <p class="post-description">Exploring the latest advancements in AI and how they are changing the
                  world.</p>
                <span class="post-category">Technology</span> | <span class="post-author">By Author Kavya</span> | <span
                  class="post-category">23 Oct 2024</span>
            </div>
            </a>
        </div>

        <div class="post-card" data-category="Design">
          <a href="bhuvana.html">
            <img src="design.jpg" alt="Design Post" />
              <div class="post-content">
                <h3>UX Design Best Practices</h3>
                <p class="post-description">Learn the essential UX design principles to improve user satisfaction.
                </p>
                <span class="post-category">Design</span> | <span class="post-author">By Author Bairavi</span> | <span
                  class="post-category">2 Oct 2024</span>
            </div>
            </a>
        </div>

        <div class="post-card" data-category="Technology" >
          <a href="bhuvana.html">
            <img src="cloud.jpg" alt="Technology Post" />
              <div class="post-content">
                <h3>Future of cloud Computing</h3>
                <p class="post-description">Exploring the latest advancements in AI and how they are changing the
                  world.</p>
                <span class="post-category">Technology</span> | <span class="post-author">By Author Gopika</span> | <span
                  class="post-category">13 Jan 2024</span>
              </div>
              </a>
        </div>

        <div class="post-card" data-category="Technology" >
          <a href="bhuvana.html">
            <img src="data.jpg" alt="Technology Post" />
              <div class="post-content">
                <h3>Future of Data Science</h3>
                <p class="post-description">Exploring the latest advancements in AI and how they are changing the
                  world.</p>
                <span class="post-category">Technology</span> | <span class="post-author">By Author Vardhani</span> | <span
                  class="post-category">3 Aug 2024</span>
            </div>
            </a>
        </div>

        <div class="post-card" data-category="Lifestyle">
          <a href="bhuvana.html">
            <img src="healthy.jpg" alt="Lifestyle Post" />
              <div class="post-content">
                <h3>Healthy Living Tips</h3>
                <p class="post-description">Simple lifestyle changes to improve your well-being and health.</p>
                <span class="post-category">Lifestyle</span> | <span class="post-author">By Author Ahila</span> | <span
                  class="post-category">28 Sep 2024</span>
            </div>
            </a>
        </div>

        <div class="post-card" data-category="Sports">
          <a href="bhuvana.html">
            <img src="kabaddi.jpg" alt="Sports- Kabbadi" />
              <div class="post-content">
                <h3>Kabbadi</h3>
                <p class="post-description">Simple lifestyle changes to improve your well-being and health.</p>
                <span class="post-category">Sports</span> | <span class="post-author">By Author Subasri</span> | <span
                  class="post-category">17 May 2024</span>
            </div>
            </a>
        </div>
        {/* <!-- Add more post cards as needed --> */}
      </div>
    </section >

    </>
  )
}

export default Blogs;