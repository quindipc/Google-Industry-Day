// Dependancies
import React, { useState, useEffect, useRef } from "react";
import "./ChatBotModal.scss";

// Assets
import OoogleSingle from "../../assets/images/logo/OOGLE-single-logo.png";
import DownArrow from "../../assets/images/icons/arrow_drop_down-24px.svg";
import RightArrow from "../../assets/images/icons/chevron_right-24px.svg";

// Components

// Pages

export default function ChatBotModal({ handleCloseModal }) {
  const chatbotRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const questions = [
    {
      id: 1,
      text: "Question 1",
      answer: "This is the answer to Question 1.",
    },
    {
      id: 2,
      text: "Question 2",
      answer: "This is the answer to Question 2.",
    },
    {
      id: 3,
      text: "Question 3",
      answer: "This is the answer to Question 3.",
    },
  ];

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
    <div className={`chatbot ${isSticky ? "chatbot--sticky" : ""}`} id="chatbot">
      <div className="chatbot__container">
        <header className="chatbot__header">
          <img className="chatbot__logo" src={OoogleSingle} alt="Ooogle Logo Single" />
          {/* Add a close button to close the modal */}
          <button className="chatbot__button-down" onClick={handleCloseModal}>
            <img className="chatbot__down" src={DownArrow} alt="Down Arrow" />
          </button>
        </header>
        <div className="chatbot__content">
          <div className="chatbot__questions">
            <label className="chatbot__label--tablet">Hi, what would you like to learn about me?</label>
            {questions.map((question) => (
              <button
                key={question.id}
                className={`chatbot__question ${selectedQuestion === question.id ? "selected" : ""}`}
                onClick={() => handleQuestionClick(question.id)}
              >
                {question.text}
              </button>
            ))}
          </div>
          <form className="chatbot__form">
            <label className="chatbot__label">Hi, what would you like to learn about me?</label>
            <div className="chatbot__input-container">
              <input className="chatbot__input" type="text" placeholder="Type here" />
              {/* replace icon here */}
              <button className="chatbot__enter">
                <img className="chatbot__right" src={RightArrow} alt="Right Arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}  