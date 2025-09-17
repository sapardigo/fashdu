"use client";

import { useState } from "react";
import { MdMenu, MdClose, MdAccountCircle } from "react-icons/md";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">FASHDU</div>

      {/* Search */}
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Navigation */}
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="#">Beranda</a>
        <a href="#">Profile</a>
        <a href="#">Layanan</a>
        <a href="#">Tips</a>
        <a href="#">Event</a>
        <a href="#">Reservasi</a>
        <a href="#">Kontak</a>
        
        
      </div>

      {/* User + Hamburger */}
      <div className="actions">
        <MdAccountCircle className="icon user" />
        <button
          className="icon menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
    </nav>
  );
}
