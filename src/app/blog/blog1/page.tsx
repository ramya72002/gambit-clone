 
import './blog1.scss';
import React from 'react'; 
import Footer from '@/app/Footer/page';
import Header from '@/app/Header/page';

const Blog1 = () => {
  return (
    <div>
                  
    <div className="blog1-container" style={{ backgroundImage: `url('http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/outstanding-person-standing-out-from-the-crowd-and-catching-audience-attention-e1698220270855.jpg')` }}>
    <Header />
      <div className="blog1-header">
        <h1>Article & News</h1>
        <h3>{/* You may want to replace this with dynamic content for the archive title */}Heading</h3>
      </div>
      <div className="blog1-content">
        {/* You can implement your blog card rendering logic here */}
        <div className="archive-cards">
          {/* Example of a blog card, repeat this for each blog post */}
          <div className="blog-card">
            <img src="your-image-url.jpg" alt="Blog Thumbnail" />
            <h4>Blog Title</h4>
            <p>{/* Blog excerpt here */}Lorem ipsum dolor sit amet...</p>
            <a href="your-post-link" className="read-more">Read More »</a>
          </div>
          {/* Add more blog cards dynamically based on your data */}
        </div>
      </div>
      <div className="pagination">
        <button className="load-more">Load More</button>
      </div>
    </div>
    <Footer />
        </div>
  );
};

export default Blog1;

