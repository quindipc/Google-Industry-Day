// Dependancies
import React, { useState, useEffect, useRef } from "react";
import "./ChatBotModal.scss";

// Assets
import OoogleSingle from "../../assets/images/logo/OOGLE-single-logo.png";
import DownArrow from "../../assets/images/icons/arrow_drop_down-24px.svg";
import RightArrow from "../../assets/images/icons/chevron_right-24px.svg";

export default function ChatBotModal({ handleCloseModal }) {
  const chatbotRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "General AI Questions",
  );
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (questionId) => {
    setSelectedQuestion(questionId);
  };

  const handleGoBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedQuestion(null);
  };

  const categories = {
    "General AI Questions": [
      {
        id: 1,
        text: "What is AI?",
        answer:
          "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making. Tell me more.",
      },
      {
        id: 2,
        text: "How does AI contribute to this product?",
        answer:
          "AI plays a significant role in enhancing this product's capabilities. It helps improve search results, provides personalized recommendations, and optimizes user experiences by analyzing patterns and data. Tell me more.",
      },
      {
        id: 3,
        text: "Can I deactivate the contribution of AI in this product?",
        answer:
          "Yes, you can deactivate the contribution of AI in this product. However, keep in mind that disabling AI features may affect the product's performance and limit certain functionalities. Tell me more.",
      },
    ],
    "Privacy Concerns": [
      {
        id: 1,
        text: "How does this AI-powered product handle user data?",
        answer:
          "This AI-powered product handles user data with utmost care and confidentiality. User data is securely processed and used to improve product performance and enhance user experience. Tell me more.",
      },
      {
        id: 2,
        text: "What information does this product collect and how is it used?",
        answer:
          "The product collects data such as search queries, usage patterns, and preferences to deliver relevant results and personalized recommendations. This information is used in compliance with our privacy policy. Tell me more.",
      },
      {
        id: 3,
        text: "Are there any privacy settings I can adjust to control my data?",
        answer:
          "Yes, we offer privacy settings that allow you to control your data. You can manage your data preferences and choose the level of personalization you desire within the product's settings. Tell me more.",
      },
      {
        id: 4,
        text: "Does the product comply with data protection regulations?",
        answer:
          "Absolutely, the product complies with all relevant data protection regulations to safeguard user information and maintain user trust. Tell me more.",
      },
    ],
    "Data Usage and Security": [
      {
        id: 1,
        text: "How is my data stored and protected by the AI used in this app?",
        answer:
          "Your data is securely stored and processed using advanced encryption techniques. We prioritize data security to protect user information from unauthorized access or breaches. Tell me more.",
      },
      {
        id: 2,
        text: "What measures are in place to ensure data security?",
        answer:
          "We have implemented robust measures to ensure data security, including access controls, regular audits, and monitoring of data processing activities. Tell me more.",
      },
      {
        id: 3,
        text: "Is my data used to improve the AI algorithms, and is it anonymized?",
        answer:
          "To improve AI algorithms and enhance user experience, anonymized and aggregated data may be used. Rest assured that individual user data is de-identified to protect privacy. Tell me more.",
      },
    ],
  };

  const handleScroll = () => {
    if (chatbotRef.current) {
      const chatbotTopOffset = chatbotRef.current.getBoundingClientRect().top;

      if (chatbotTopOffset <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`chatbot ${isSticky ? "chatbot--sticky" : ""}`}
      id="chatbot"
      ref={chatbotRef}
    >
      <div className="chatbot__container">
        <header className="chatbot__header">
          <img
            className="chatbot__logo"
            src={OoogleSingle}
            alt="Ooogle Logo Single"
          />
          {/* Add a close button to close the modal */}
          <button className="chatbot__button-down" onClick={handleCloseModal}>
            <img className="chatbot__down" src={DownArrow} alt="Down Arrow" />
          </button>
        </header>
        <div className="chatbot__content">
          {!selectedCategory && (
            <div className="chatbot__categories">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  className="chatbot__category"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {selectedCategory && !selectedQuestion && (
            <div className="chatbot__questions">
              {categories[selectedCategory].map((question) => (
                <button
                  key={question.id}
                  className="chatbot__question"
                  onClick={() => handleQuestionClick(question.id)}
                >
                  {question.text}
                </button>
              ))}
              <div className="chatbot__back" onClick={handleGoBackToCategories}>
                Go Back to Categories
              </div>
            </div>
          )}

          {selectedCategory && selectedQuestion && (
            <div className="chatbot__answer">
              {categories[selectedCategory].find(
                (question) => question.id === selectedQuestion
              )?.answer}
              <div className="chatbot__back" onClick={() => setSelectedQuestion(null)}>
                Go Back to Questions
              </div>
            </div>
          )}

          {!selectedCategory && (
            <form className="chatbot__form">
              <label className="chatbot__label">
                Hi, what would you like to learn about me?
              </label>
              <div className="chatbot__input-container">
                <input
                  className="chatbot__input"
                  type="text"
                  placeholder="Type here"
                />
                {/* replace icon here */}
                <button className="chatbot__enter">
                  <img
                    className="chatbot__right"
                    src={RightArrow}
                    alt="Right Arrow"
                  />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}