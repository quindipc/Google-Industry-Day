// Dependances
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from './pages/HomePage/HomePage';

// Components

export default function App() {
 

  return (
    <BrowserRouter>
    {/* Render the Header component */}
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} /> */}
    </Routes>

    <Footer />
  </BrowserRouter>
  )
}

