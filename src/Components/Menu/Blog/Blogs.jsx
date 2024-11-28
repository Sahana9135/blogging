import React, { useState } from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
import ai from './ai.jpg';
import cloud from './cloud.jpg';
import data from './data.jpg';
import design from './design.jpg';
import healthy from './healthy.jpg';
import kabaddi from './kabaddi.jpg';
import program from './program.jpg';
import technology from './technology.jpg';

function Blogs() {
  const [filter, setFilter] = useState('All');

  const posts = [
    {
      id: 1,
      category: 'Technology',
      title: 'Future of AI Technology',
      description: 'Exploring the latest advancements in AI and how they are changing the world.',
      author: 'Bhuvana',
      date: '24 Oct 2024',
      image: ai,
      content: 'Artificial intelligence (AI) is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy.'
    },
    {
      id: 2,
      category: 'Programming',
      title: 'JavaScript ES6 Features',
      description: 'A guide to the latest JavaScript ES6 features every developer should know.',
      author: 'Harshini',
      date: '9 Jan 2024',
      image: program,
      content: 'Artificial intelligence (AI) is technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy.'
    },
    {
      id: 3,
      category: 'Technology',
      title: 'Cyber Security ',
      description: 'Understanding the importance of Cyber security in Today world',
      author: 'Kavya',
      date: '23 Oct 2024',
      image: technology,
      content:'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information;'
    },

    {
      id: 4,
      category: 'Design',
      title: 'UX Design Best Practices',
      description: 'Learn the essential UX design principles to improve user satisfaction.',
      author: 'Bairavi',
      date: '2 Oct 2024',
      image: design,
      content:'UI design involves the look of a product — namely, the visual components and interactive elements that contribute to a strong user experience. Meanwhile, UX design focuses on the overarching feel of the product or service and the components that will lead to a meaningful, relevant experience for users.'
    },
    {
      id: 5,
      category: 'Technology',
      title: 'Cloud Computing',
      description: 'Data science is the study of data to extract meaningful insights.',
      author: 'Gopika',
      date: '13 Jan 2024',
      image: cloud,
      content:'Cloud computing is a way to access computing services like storage, servers, software, and databases on-demand.'
    },
    {
      id: 6,
      category: 'Lifestyle',
      title: 'Healthy Living Tips',
      description: 'Simple lifestyle changes to improve your well-being and health.',
      author: 'Ahila',
      date: '28 Sep 2024',
      image: healthy,
      content:'A healthy lifestyle is a way of living that lowers the risk of being seriously ill or dying early. Not all diseases are preventable, but a large proportion of deaths, particularly those from coronary heart disease and lung cancer, can be avoided.'
    },
    {
      id: 7,
      category: 'Technology',
      title: 'Data Science',
      description: 'Data science is the study of data to extract meaningful insights.',
      author: 'Vardhani',
      date: '3 Aug 2024',
      image: data,
      content:'Data science is a multidisciplinary field that uses a variety of methods to analyze data and extract insights for business.'
    },
    {
      id: 8,
      category: 'Sports',
      title: 'Kabbadi',
      description: 'Simple lifestyle changes to improve your well-being and health.',
      author: 'Subasri',
      date: '17 May 2024',
      image: kabaddi,
      content: 'The objective of Kabaddi is to score points by raiding the opponents court and touching as many of their players as possible without getting caught. The game is played between two teams of seven players, alternating between offense and defense. ',
    }
  ];

  // Filter posts based on the selected category
  const filteredPosts = posts.filter(
    (post) => filter === 'All' || post.category === filter
  );

  return (
    <section id="explore-posts" className="explore-posts-section">
      <h2>Explore Our Latest Posts</h2>
      <p>Discover articles from a variety of topics and authors.</p>

      {/* Category Filter */}
      <div className="category-filter">
        {['All', 'Technology', 'Programming', 'Design', 'Lifestyle', 'Sports'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={filter === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      <div className="post-grid">
        {filteredPosts.map((post) => (
          <div className="post-card" key={post.id} data-category={post.category}>
            <Link to={`/post/${post.id}`} state={{ post }}>
              <img src={post.image} alt={`${post.category} Post`} />
              <div className="post-content">
                <h3>{post.title}</h3>
                <p className="post-description">{post.description}</p>
                <span className="post-category">{post.category}</span> |{' '}
                <span className="post-author">By {post.author}</span> |{' '}
                <span className="post-date">{post.date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
