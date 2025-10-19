import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#2f4538] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Urban Roots Logo" className="w-10 h-10" />
          <span className="font-semibold text-xl tracking-wide">
            Urban Roots Café
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wider">
          <Link to="/">Início</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/cafe">Cafeteria</Link>
          <Link to="/coworking">Coworking</Link>
          <Link to="/contact">Contato</Link>
        </nav>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#2f4538] text-center py-4 space-y-3">
          <Link to="/" onClick={() => setOpen(false)}>Início</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Sobre</Link>
          <Link to="/cafe" onClick={() => setOpen(false)}>Cafeteria</Link>
          <Link to="/coworking" onClick={() => setOpen(false)}>Coworking</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contato</Link>
        </div>
      )}
    </header>
  );
}