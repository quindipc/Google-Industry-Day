// Dependances
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
// import ChatBotPage from "./pages/ChatBotPage/ChatBotPage";

// Components
import Header from "./components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <AIWidget/> */}
      {/* Render the Header component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* This may have to be a modal */}
        {/* //       <Route path="/chatbot" element={<ChatBotPage />} />   */}
      </Routes>
    </BrowserRouter>
  );
}
