'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './faq2.scss'; // Adjust the path as necessary for your SCSS file

const FAQ2: React.FC = () => {
  return (
    <div className="faq2-container">
      <div className="faq2-header">
        <h2 className="faq2-title">We're here to help you</h2>
        <p className="faq2-subtitle">Have questions? We've got answers.</p>
      </div>
      <div className="faq2-accordion">
        <Accordion />
      </div>
      <div className="faq2-category">
        <h3 className="faq2-category-title">Popular Category</h3>
        <IconList />
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const questions = [
    {
      title: "Ex feugiat felis vel vulputate suspendisse?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Sagittis et litora quisque rhoncus diam?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Congue ex massa blandit sollicitudin sapien?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Hendrerit himenaeos ac curae pellentesque tempor?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Habitant quisque consectetur non nibh etiam?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {questions.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const IconList: React.FC = () => {
  const icons = [
    { text: "Get Started", icon: "mdi mdi-file-document" },
    { text: "Services", icon: "fas fa-chess" },
    { text: "Class Program", icon: "icofont icofont-group-students" },
    { text: "Payment", icon: "fas fa-id-card" },
    { text: "Account", icon: "mdi mdi-account-check" },
    { text: "Settings", icon: "fas fa-cogs" },
    { text: "Security", icon: "mdi mdi-security" },
    { text: "Other Questions", icon: "icofont icofont-question-square" },
  ];

  return (
    <ul className="icon-list">
      {icons.map((item, index) => (
        <li key={index} className="icon-list-item">
          <i className={item.icon}></i> {item.text}
        </li>
      ))}
    </ul>
  );
};

export default FAQ2;
