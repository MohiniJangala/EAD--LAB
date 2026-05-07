import { Link, Route, Routes } from "react-router-dom";
import "./RouterPages.css";

function Home() {
  return (
    <div className="router-page">
      <h3>Home Page</h3>
      <p>Welcome to the sample multi-page React application.</p>
    </div>
  );
}

function About() {
  return (
    <div className="router-page">
      <h3>About Page</h3>
      <p>This page explains routing using React Router.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="router-page">
      <h3>Contact Page</h3>
      <p>Email: student@example.com</p>
    </div>
  );
}

function RouterPages() {
  return (
    <section className="experiment-card">
      <h2>Experiment 4: Multi-Page App using React Router</h2>
      <p className="muted-text">
        These links change pages without reloading the browser.
      </p>

      <nav className="router-nav" aria-label="Router experiment navigation">
        <Link to="">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </section>
  );
}

export default RouterPages;
