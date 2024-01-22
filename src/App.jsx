import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import BussinessSetups from "./Components/Pages/BussinessSetups"
import NoPage from "./Components/Pages/NoPage"
import Services from "./Components/Pages/Services"
import Contact from "./Components/Pages/Contact"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setup" element={<BussinessSetups />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;