import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#2f4538] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Urban Roots Logo" className="w-20 h-20" />
          <span className="font-semibold text-xl tracking-wide">
            Urban Roots Coffe
          </span>
        </Link>


        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <Link to="/" className="hover:text-[#c5a880] transition">Início</Link>
          <Link to="/about" className="hover:text-[#c5a880] transition">Sobre</Link>
          <Link to="/cafe" className="hover:text-[#c5a880] transition">Cafeteria</Link>
          <Link to="/coworking" className="hover:text-[#c5a880] transition">Coworking</Link>
          <Link to="/contact" className="hover:text-[#c5a880] transition">Contato</Link>
        </nav>


        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>


      {open && (
        <div className="md:hidden bg-[#2f4538] text-center py-5 flex flex-col gap-4 border-t border-[#c5a880]/30">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-[#c5a880] transition">Início</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-[#c5a880] transition">Sobre</Link>
          <Link to="/cafe" onClick={() => setOpen(false)} className="hover:text-[#c5a880] transition">Cafeteria</Link>
          <Link to="/coworking" onClick={() => setOpen(false)} className="hover:text-[#c5a880] transition">Coworking</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-[#c5a880] transition">Contato</Link>
        </div>
      )}
    </header>
  );
}
