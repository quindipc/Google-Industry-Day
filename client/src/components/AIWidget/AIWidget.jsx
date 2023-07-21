// Dependancies
import React from "react";
import { useState } from "react";

// Assets
import "./AIWidget.scss";

// Components
import ChatBotModal from "../ChatBotModal/ChatBotModal"; // Import the ChatBotModal component

// Pages

export default function AIWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="aiwidget__container">
          <button className="aiwidget__button--mobile"onClick={handleOpenModal}>AI</button>
          <button className="aiwidget__button--tablet"onClick={handleOpenModal}>AI</button>
      </div>
          
      {/* Render the ChatBotModal if isModalOpen is true */}
      {isModalOpen && <ChatBotModal handleCloseModal={handleCloseModal} />}
    </>
  );
}
