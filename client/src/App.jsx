// bootstrap cdn for styling and fontawesome cdn for icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Custom CSS
import "./App.css";

// Common Components
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

// Page Components
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Blogger from "./components/Pages/Blogger";
import Blog from "./components/Pages/Blog";

import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogger" element={<Blogger/>} />
        <Route path="/blog/:blogId" element={<Blog/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
