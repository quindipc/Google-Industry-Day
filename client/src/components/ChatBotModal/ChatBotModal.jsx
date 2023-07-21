// Dependancies
import React from "react";
import "./ChatBotModal.scss";

// Assets
import OoogleSingle from "../../assets/images/logo/OOGLE-single-logo.png";
import DownArrow from "../../assets/images/icons/arrow_drop_down-24px.svg";
import RightArrow from "../../assets/images/icons/chevron_right-24px.svg";

// Components

// Pages

export default function ChatBotModal({ handleCloseModal }) {
  return (
    <div className="chatbox">
      <header className="chatbox__header">
        <img
          className="chatbox__logo"
          src={OoogleSingle}
          alt="Ooogle Logo Single"
        />
        {/* Add a close button to close the modal */}
        <button onClick={handleCloseModal}>
          <img className="chatbox__down" src={DownArrow} alt="Down Arrow" />
        </button>
      </header>
      <div className="chatbox__content">
        <p>Welcome to the chatbot!</p>
        <form className="chatbox__form">
          <input className="chatbox__input" type="text" />
          <img className="chatbox__right" src={RightArrow} alt="Right Arrow" />
        </form>
      </div>
    </div>
  );
}
