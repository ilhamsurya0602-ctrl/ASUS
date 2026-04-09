import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo Ridwan Furniture" className="logo" />
        <h1>Ridwan Furniture</h1>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
