import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Cafe from "./pages/Cafe";
import Coworking from "./pages/Coworking";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<PageTransition><Home /></PageTransition>}
          />
          <Route
            path="/about"
            element={<PageTransition><About /></PageTransition>}
          />
          <Route
            path="/cafe"
            element={<PageTransition><Cafe /></PageTransition>}
          />
          <Route
            path="/coworking"
            element={<PageTransition><Coworking /></PageTransition>}
          />
          <Route
            path="/contact"
            element={<PageTransition><Contact /></PageTransition>}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
