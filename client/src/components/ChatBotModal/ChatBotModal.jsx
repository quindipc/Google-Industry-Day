// Dependancies
import React from "react";
import "./ChatBotModal.scss";

// Assets
import OoogleSingle from "../../assets/images/logo/OOGLE-single-logo.png";

// Components

// Pages

export default function ChatBotModal({ handleCloseModal }) {
  return (
    <div className="chatbox">
      <header className="chatbox__header">
        <img
          className="header__logo--mobile"
          src={OoogleSingle}
          alt="Ooogle Logo Single"
        />
        {/* Add a close button to close the modal */}
        <button onClick={handleCloseModal}>Close</button>
      </header>
      <div className="chatbox__content">
        <p>Welcome to the chatbot!</p>
      </div>
    </div>
  );
}
