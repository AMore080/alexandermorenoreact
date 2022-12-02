import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import Header from "./components/Header";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutme" element={<About />}/>
          <Route path="/contactme" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
