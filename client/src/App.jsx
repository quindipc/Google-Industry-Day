// Dependances
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ChatBotPage from "./pages/ChatBotPage/ChatBotPage";

// Components
import Header from "./components/Header/Header"

export default function App() {
 

  return (
    <BrowserRouter>
    {/* Render the Header component */}
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatbot" element={<ChatBotPage />} />
    </Routes>

    <Footer />
  </BrowserRouter>
  )
}

