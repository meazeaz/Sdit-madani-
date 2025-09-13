// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/bg_noise.png";
import logo from "../assets/logo.png";

const menuItems = [
  { label: "Beranda", path: "/" },
  { label: "Profil", path: "/profil" },
  { label: "Prestasi", path: "/prestasi" },
  { label: "PPDB", path: "/ppdb" },
  { label: "Artikel", path: "/artikel" },
  { label: "Kontak", path: "/kontak" },
];

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [drawerOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-16 py-4 md:py-6
          bg-[#FEFDEB] md:bg-none
        `}
        style={{
          backgroundImage: window.innerWidth >= 768 ? `url(${bgImage})` : "none",
          backgroundSize: window.innerWidth >= 768 ? "cover" : "none",
          backgroundPosition: window.innerWidth >= 768 ? "center" : "none",
          backgroundRepeat: window.innerWidth >= 768 ? "no-repeat" : "none",
          backdropFilter: window.innerWidth >= 768 ? "blur(10px)" : "none",
          WebkitBackdropFilter: window.innerWidth >= 768 ? "blur(10px)" : "none",
        }}
      >
        {/* Logo dan nama */}
        <div className="flex items-center gap-2 z-30">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="font-extrabold text-xl sm:text-2xl text-[#1A2B3B] select-none">
            SDIT MADANI
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 font-medium z-30">
          {menuItems.map((item, index) => (
            <li
              key={item.label}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`cursor-pointer transition-colors duration-300 select-none ${
                hoverIndex === index ? "text-[#F8D49A]" : "text-[#1A2B3B]"
              }`}
              style={{
                transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
                transition: "color 0.3s ease, transform 0.3s ease",
              }}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Tombol hamburger hanya di mobile */}
        <button
          className="md:hidden z-40 text-[#1A2B3B] focus:outline-none ml-auto"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={drawerOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Buttons Desktop */}
        <div className="hidden md:flex items-center gap-6 z-30">
          
          <a href="https://wa.me/6285155139392" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#1A2B3B] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-[#222] hover:text-[#F8D49A] transition-all duration-300 select-none"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F8D49A")}
            
            >
              Get In Touch
            </button>
          </a>
        </div>
      </nav>

      {/* Side Drawer Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#FEFDEB] text-[#1A2B3B] z-50 transform transition-transform duration-300 ease-in-out shadow-lg
          ${drawerOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ width: "70vw", minWidth: "220px", maxWidth: "320px" }}
      >
        {/* Logo di atas drawer */}
        <div className="flex items-center gap-2 px-6 pt-6 pb-4 border-b border-[#e5e5e5]">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="font-extrabold text-xl text-[#1A2B3B] select-none">
            SDIT MADANI
          </span>
        </div>
        <nav className="flex flex-col mt-6 px-6 space-y-8 select-none">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-lg font-semibold text-left text-[#1A2B3B] hover:text-[#9bbf44] focus:outline-none"
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <button className="flex items-center gap-2 text-[#9bbf44] font-semibold text-base focus:outline-none">
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
              Login
            </button>
            <button className="bg-[#9bbf44] text-[#1A2B3B] px-6 py-3 rounded-full font-semibold shadow hover:bg-[#b7d964] transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay saat drawer terbuka */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Spacer supaya konten tidak tertutup navbar fixed */}
      <div className="h-16 md:h-20"></div>

      {/* Style khusus agar menu desktop benar-benar hilang di mobile */}
      <style>{`
        @media (max-width: 767px) {
          nav > ul,
          nav > div.md\\:flex {
            display: none !important;
          }
          nav {
            background: #FEFDEB !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </>
  );
}
