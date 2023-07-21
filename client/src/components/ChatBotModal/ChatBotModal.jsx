// Dependancies
import React, {useState, useEffect, useRef} from "react";
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
        <p>Hi, what would you like to learn about me?</p>
        <form className="chatbot__form">
          <input className="chatbot__input" type="text" />
          <img className="chatbot__right" src={RightArrow} alt="Right Arrow" />
        </form>
        </div>
        </div>
    </div>
  );
}
