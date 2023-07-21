import React from "react";
import { useState } from "react";
  import Ai from "../../assets/images/avatar/"
import "./AIWidget.scss";

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
//Function to help with open/close chat
  const toggleChatbox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    // ${isOpen ? "open" : ""} can be put in side first div
    //Once that is done, the commented out code can be uncommented
  };
  return (
    <div className={`chatbox`}>
      {/* <div className="chatbox__toggle">
        {isOpen ? "Close Chat" : "Open Chat"}
      </div> */}
      <div className="chatbox__content">
        <div className="chatbox__img" onClick={toggleChatbox}>
          <img
            src="https://freesvg.org/img/1538298822.png"
            alt="AI Chat icon"
          />
        </div>
      </div>
    </div>
  );
};

export default AIWidget;
