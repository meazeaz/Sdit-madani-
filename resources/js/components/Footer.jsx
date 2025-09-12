import React from "react";
import logo from "../assets/logo.png"; // Ganti path jika perlu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#F6FAF7] text-gray-700 pt-12 pb-6 px-4 md:px-12 mt-12 border-t border-[#e0eae2]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start md:items-stretch">
        {/* Kiri: Info & Kontak */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="Logo SDIT Madani" className="w-14 h-14 object-contain" />
            <span className="font-bold text-2xl text-[#1A2B3B]">SDIT Madani</span>
          </div>
          <p className="text-base font-semibold mt-1 mb-2">Yayasan Islamic Center Al Madany</p>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-green-600" />
              <span>+6221 54260919</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-600" />
              <span>
                Email: <a href="mailto:Info@sditmadani.org" className="hover:underline text-[#1A2B3B]">Info@sditmadani.org</a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600" />
              <span>Jl. Madani, Perumnas 2, Parungpanjang</span>
            </li>
          </ul>
        </div>
        {/* Kanan: Google Maps */}
        <div className="flex-1 w-full md:w-[48%] rounded-xl overflow-hidden shadow-sm border border-[#e0eae2] min-h-[230px]">
          <iframe
            title="SDIT Madani Map"
            src="https://www.google.com/maps?q=Jl.+Madani,+Parung+Panjang,+Kec.+Parung+Panjang,+Kabupaten+Bogor,+Jawa+Barat+16360&output=embed"
            width="100%"
            height="230"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#e0eae2] flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Sosial Media */}
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="#" className="hover:text-green-700 transition"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="hover:text-green-700 transition"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="hover:text-green-700 transition"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="hover:text-green-700 transition"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" className="hover:text-green-700 transition"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-500">
          © {new Date().getFullYear()} <a href="#" className="text-[#1A2B3B] font-semibold">AFFANDI ABDUL AZIZ</a>. All Rights Reserved
        </div>
        {/* Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy & Terms</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
