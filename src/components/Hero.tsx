import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      <img
        src={heroImg}
        alt="Urban Roots Café"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Café. Sustentabilidade. Conexão.
        </h1>
        <p className="text-lg mb-6">
          Um espaço para relaxar, saborear e criar.
        </p>
        <Link
          to="/coworking"
          className="bg-[#c5a880] text-[#2f4538] px-6 py-3 rounded-lg font-semibold hover:bg-[#996b42] transition"
        >
          Conheça o Espaço
        </Link>
      </motion.div>
    </section>
  );
}