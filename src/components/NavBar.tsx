"use client";

import { useState } from "react";
import { MdMenu, MdClose, MdShare } from "react-icons/md";  // , MdAccountCircle <- dikeluarkan dari dalam {}
import "./NavBar.css";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="brand">
      <Link href="/" className="no-underline hover:no-underline">
        FASHDU
      </Link>
      </div>


      {/* Search */}
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Navigation */}
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <a href="#">Beranda</a>
        <a href="#">Proses</a>
        <a href="#">Layanan</a>
        <a href="#">Artikel</a>
        <a href="#">Daftar Terapi</a>
        <a href="#">Kontak</a>
        
        
      </div>

      {/* User + Hamburger */}
      <div className="actions">
        <MdShare className="icon share" />
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
