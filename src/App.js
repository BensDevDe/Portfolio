import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import data from "./projects-data.json";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects projects={data} />} />
          <Route
            path="/projects/:name"
            element={<Projects projects={data} />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="https://github.com/bensdev/" />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
