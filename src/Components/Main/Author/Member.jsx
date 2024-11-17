import React from 'react';
import './Member.css';
import author from './Author.jpg'
function Member() {
    const viewPost = (message) => {
        alert(`View Posted by Author ${message}`);
      };
  return (
    <>
        {/* <!-- Authors Section --> */}
     <section id="authors" className="authors-section">
                <h2>Meet Our Authors</h2>
                <p>Learn more about the writers behind the content.</p>

                <div className="author-grid">
                    {/* <!-- Sample Author Cards --> */}
                    <div className="author-card" onClick={() => viewPost('Subasri')}>
                        <img src={author} alt="subasri" />
                        <h3>Subasri</h3>
                        <p>Sports & Food Blogger</p>
                    </div>
                    <div className="author-card" onClick={() => viewPost('Ahila')}>
                        <img src={author} alt="Ahila"  />
                        <h3>Ahila</h3>
                        <p>Food Blogger</p>
                    </div>
                    <div className="author-card" onClick={() => viewPost('Kavya')}>
                        <img src={author} alt="Kavya" />
                        <h3>Kavya</h3>
                        <p>Full Stack Developer & Reviewer</p>
                    </div>
                    <div className="author-card" onClick={() => viewPost('Harshini')}>
                        <img src={author} alt="Harshini" />
                        <h3>Harshini</h3>
                        <p>Full Stack Developer & Teacher</p>
                    </div>
                    <div className="author-card" onClick={() => viewPost('Gopika')} >
                        <img src={author} alt="Gopika" />
                        <h3>Gopika</h3>
                        <p>Cloud Engineer and Startups Blogger</p>
                    </div>
                    <div className="author-card" onClick={() => viewPost('Bairavi')}>
                        <img src={author} alt="Bairavi" />
                        <h3>Bairavi</h3>
                        <p>Full Stack Developer & Teacher & Sports Blogger</p>
                    </div>
                    <div className="author-card" onClick={() => viewPost('Vardhani')}>
                        <img src={author} alt="Vardhani" />
                        <h3>Vardhani</h3>
                        <p>Ideas of Lifestyle Blogger</p>
                    </div>
                    <div className="author-card" onClick={() => viewPost('Bhuvaneswari')}>
                        <img src={author} alt="Bhuvaneshwari" />
                        <h3>Bhuvaneshwari</h3>
                        <p>Tech Enthusiast & Reviewer</p>
                    </div>
                    {/* <!-- <div className="author-card">
        <img src="Sahana.jfif" alt="Sahana">
        <h3>Sahana</h3>
        <p>Ideas of Lifestyle Blogger</p>
      </div> --> */}


                    {/* <!-- Add more authors as needed --> */}
                </div>
            </section>
    </>
  )
}

export default Member;