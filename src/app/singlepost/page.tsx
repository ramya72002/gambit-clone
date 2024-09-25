import React from 'react';
import './singlepost.scss'; // Add your styles here

const SinglePost = () => {
  // Dummy data; replace with actual props or API data
  const post = {
    title: "Gambit - Single Post",
    category: "Chess",
    author: {
      name: "Tomas Jerk",
      bio: "Hi, this is dummy biographical info for the design template kit moxcreative.",
      avatar: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/16.jpg",
    },
    date: "October 16, 2023",
    commentsCount: 5,
    content: "This is the content of the single post. It contains information about the topic discussed.",
  };

  return (
    <div className="single-post">
      {/* Background Section */}
      <div className="post-background">
        <h6 className="post-category">{post.category}</h6>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-info">
          <span className="post-date">{post.date}</span>
          <span className="post-comments">{post.commentsCount} Comments</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="post-content">
        <p>{post.content}</p>
      </div>

      {/* Author Box */}
      <div className="author-box">
        <img src={post.author.avatar} alt={`${post.author.name} avatar`} className="author-avatar" />
        <div className="author-info">
          <h2>{post.author.name}</h2>
          <p>{post.author.bio}</p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="post-comments">
        <h3>Comments</h3>
        {/* Add logic for rendering comments here */}
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-signup">
        <h5>Signup our newsletter to get update information, insight or news.</h5>
        <form>
          <input type="email" placeholder="Email" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePost;
