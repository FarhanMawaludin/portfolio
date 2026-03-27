import React, { useState } from "react";
import { List, X } from "phosphor-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-6 md:px-8 py-4 relative">
      
      {/* Logo */}
      <div className="text-white text-2xl font-semibold tracking-tight">
        Han
      </div>

      {/* Menu */}
      <nav className="hidden md:flex items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-sm text-white">
        <a href="#about" className="hover:text-white/70 transition">About</a>
        {/* <a href="#blog" className="hover:text-white/70 transition">Blog</a> */}
        <a href="#projects" className="hover:text-white/70 transition">Projects</a>
        {/* <a href="#resume" className="hover:text-white/70 transition">Resume</a> */}

        {/* More button */}
        {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          •••
        </button> */}
      </nav>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full px-6 mt-2 md:hidden">
          <nav className="flex flex-col gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-white text-sm">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white/70 transition">About</a>
            {/* <a href="#blog" className="hover:text-white/70 transition">Blog</a> */}
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white/70 transition">Projects</a>
            {/* <a href="#resume" className="hover:text-white/70 transition">Resume</a> */}
          </nav>
        </div>
      )}
    </header>
  );
}