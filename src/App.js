import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Project from "./Components/Project/Project";
import Service from "./Components/Services/Service";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<><Home/></>} />
        <Route path="/home" element={<><Home/></>} />
        <Route path="/about" element={<><About/></>} />
        <Route path="/blog" element={<><Blog/></>} />
        <Route path="/contact" element={<><Contact/></>} />
        <Route path="/service" element={<><Service/></>} />
        <Route path="/project" element={<><Project/></>} />


      </Routes>
    </div>
  );
}

export default App;
