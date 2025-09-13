import React, { useRef, useEffect, useState } from "react";
import ppdbBanner from "../assets/ppdb.png";
import { useNavigate } from "react-router-dom";
import bgNoise from "../assets/bg.png";
import logo from "../assets/logo.png";
import ppdb1 from "../assets/1.png";
import ppdb2 from "../assets/2.png";
import ppdb3 from "../assets/3.png";
import ppdb4 from "../assets/4.png";

// Intersection observer animasi
function useSectionInView(options = {}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.17, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return [ref, visible];
}

function CardAnim({ children, delay = 0 }) {
  const [ref, visible] = useSectionInView();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg border border-[#e0eae2] p-5 sm:p-8 mb-6
      transition-all duration-900 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function PPDB() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f9fafb] min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative w-full py-10 sm:py-14 md:py-20 flex flex-col items-center justify-center border-b border-[#e0eae2] overflow-hidden animate-heroIn"
        style={{
          backgroundImage: `url(${bgNoise})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute left-4 top-4 w-6 h-6 sm:left-12 sm:top-8 sm:w-8 sm:h-8 bg-[#e6f7d9] rounded-full blur-xl opacity-70 animate-bubble"></div>
        <div className="absolute right-6 bottom-2 w-8 h-8 sm:right-12 sm:bottom-8 sm:w-12 sm:h-12 bg-[#f8e6b2] rounded-full blur-xl opacity-70 animate-bubble"></div>
        <img
          src={logo}
          alt="Logo SDIT Al Madani"
          className="mx-auto w-16 h-16 sm:w-24 sm:h-24 mb-3 z-10 animate-dropIn"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#176324] mb-2 z-10 animate-dropIn text-center px-2 shadow-sm">
          PPDB 2026/2027 — SDIT-SMPIT-Ponpes Al-Qur'an
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto z-10 animate-fadeIn text-center px-3 font-semibold mb-4">
          Dibuka! <span className="text-[#019164]">Penerimaan Peserta Didik Baru</span>
          Tahun Ajaran <b>2026/2027</b> di bawah YIC AL Madany
        </p>
        {/* Gambar PPDB lebih besar dan ada jarak */}
        <div className="flex flex-row justify-center items-center gap-8 mt-4 mb-2 w-full">
          <img
            src={ppdb1}
            alt="Poster PPDB 2025 SDIT SMPIT Ponpes Madani"
            className="rounded-xl object-cover w-full max-w-xl h-auto shadow-2xl border-4 border-white animate-bounceIn"
            loading="lazy"
          />
          <img
            src={ppdb2}
            alt="Poster PPDB 2025 SDIT SMPIT Ponpes Madani"
            className="rounded-xl object-cover w-full max-w-xl h-auto shadow-2xl border-4 border-white animate-bounceIn"
            loading="lazy"
          />
        </div>
      </section>

      {/* Info/Highlight PPDB */}
      <section className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto mt-8 sm:mt-12 mb-5 sm:mb-10 animate-sectionIn">
        <CardAnim delay={0.12}>
          <h2 className="text-xl sm:text-2xl font-bold text-[#176324] mb-2 text-center">Kenapa Pilih <span className="text-[#019164]">Madani?</span></h2>
          <ul className="flex flex-col gap-3 sm:gap-4 mt-3">
            <li className="flex items-start gap-3 text-sm sm:text-lg">
              <span className="text-2xl">🌍</span>
              <span>
                <b>Educational Trip ke <span className="underline text-[#038085]">Singapura & Malaysia</span></b>
                <sup className="text-xs text-[#019164] font-bold ml-1 animate-pulse">Program Favorit!</sup>
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm sm:text-lg">
              <span className="text-2xl">🏫</span>
              <span>Kelas <b>Full AC & Fasilitas Modern</b></span>
            </li>
            <li className="flex items-start gap-3 text-sm sm:text-lg">
              <span className="text-2xl">📜</span>
              <span><b>Program Khusus Hafalan Al-Qur'an</b> dari SD hingga Pondok</span>
            </li>
            <li className="flex items-start gap-3 text-sm sm:text-lg">
              <span className="text-2xl">🎓</span>
              <span><b>Beasiswa Hafidz Qur'an</b> bagi para penghafal terbaik</span>
            </li>
          </ul>
        </CardAnim>

        <CardAnim delay={0.28}>
          <div className="text-center text-sm sm:text-lg py-3">
            <b className="text-[#ef262c] text-lg sm:text-2xl mb-1 inline-block animate-flash">
              Kuota terbatas! Daftar sekarang, raih masa depan gemilang!
            </b>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-3 gap-3 sm:gap-4">
              <a
                href="https://heylink.me/madaniku"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#019164] to-[#2E7D32] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:brightness-110 transition-all font-semibold text-base animate-pop"
                title="Daftar Online PPDB Madani"
              >
                🌐 Daftar Online Disini
              </a>
              <button
                type="button"
                onClick={() => window.open('https://heylink.me/madaniku', '_blank')}
                className="underline text-[#219be0] hover:text-[#176324] font-semibold"
              >
                Lihat Info Lengkap PPDB
              </button>
            </div>
          </div>
        </CardAnim>

        <CardAnim delay={0.44}>
          <h2 className="text-lg sm:text-xl font-semibold text-[#176324] mb-3">Kontak & Pendaftaran</h2>
          <div className="flex flex-col gap-2 sm:gap-3 text-base items-start sm:items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="text-[#2E7D32] font-bold">SDIT:</span>
              <a
                href="https://wa.me/6285155139392"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#019164] font-medium transition-colors"
                title="Chat SDIT Madani"
              >
                0851-5513-9392
              </a>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl">📲</span>
              <span className="text-gray-600">heylink.me/madaniku</span>
            </div>
          </div>
        </CardAnim>
        <CardAnim delay={0.62}>
          <div className="text-center text-sm sm:text-base text-gray-700">
            <b className="text-[#176324]">Ayo, wujudkan masa depan generasi unggul bersama Madani!</b>
          </div>
        </CardAnim>
      </section>

      {/* Animasi CSS */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: none;}
        }
        @keyframes heroIn {
          0% { opacity: 0; transform: scale(0.96) translateY(60px);}
          100% { opacity: 1; transform: scale(1) translateY(0);}
        }
        @keyframes dropIn {
          0% { opacity: 0; transform: translateY(-60px) scale(0.8);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.93) translateY(50px);}
          60% { opacity: 1; transform: scale(1.05) translateY(-10px);}
          100% { opacity: 1; transform: scale(1) translateY(0);}
        }
        @keyframes sectionIn {
          0% { opacity: 0; transform: translateY(60px);}
          100% { opacity: 1; transform: none;}
        }
        @keyframes bubble {
          0%,100% { transform: scale(1) translateY(0);}
          50% { transform: scale(1.2) translateY(-10px);}
        }
        @keyframes flash {
          0%,100% { color: #ef262c;}
          50% { color: #fbc02d;}
        }
        @keyframes pop {
          0% { transform: scale(0.78);}
          85% { transform: scale(1.05);}
          100% { transform: scale(1);}
        }
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(.39,.575,.565,1) both; }
        .animate-heroIn { animation: heroIn 1.3s cubic-bezier(.39,.575,.565,1) both; }
        .animate-dropIn { animation: dropIn 1.1s cubic-bezier(.39,.575,.565,1) both; }
        .animate-bounceIn { animation: bounceIn 1.5s cubic-bezier(.39,.575,.565,1) both; }
        .animate-sectionIn { animation: sectionIn 1.1s cubic-bezier(.39,.575,.565,1) both; }
        .animate-bubble { animation: bubble 3s ease-in-out infinite; }
        .animate-flash { animation: flash 1.7s linear infinite; }
        .animate-pop { animation: pop 0.6s cubic-bezier(.39,.575,.565,1) 1; }
      `}</style>

      {/* Bottom spacer */}
      <div className="h-14 sm:h-24"></div>
    </div>
  );
}
