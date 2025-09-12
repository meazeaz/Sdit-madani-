import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import bgNoise from "../assets/bg.png";
import { useNavigate } from "react-router-dom";

// Animasi intersection observer
function useSectionInView(options = {}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.16, ...options }
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
      className={`bg-white rounded-2xl shadow-lg border border-[#e0eae2] p-5 sm:p-8 mb-7 transition-all duration-900
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function Kontak() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: ""
  });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3500);
    setForm({ nama: "", email: "", pesan: "" });
  }

  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f9fafb] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full py-10 sm:py-14 md:py-18 flex flex-col items-center justify-center border-b border-[#e0eae2] overflow-hidden animate-heroIn"
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
          className="mx-auto w-14 h-14 sm:w-24 sm:h-24 mb-3 z-10 animate-dropIn"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1A2B3B] mb-2 z-10 animate-dropIn text-center px-2 shadow-sm">
          Kontak & Hubungi Kami
        </h1>
        <p className="text-sm sm:text-lg text-gray-700 max-w-xl mx-auto z-10 animate-fadeIn text-center px-3 font-semibold mb-1">
          Tinggalkan pesan, kritik, saran, atau pertanyaan. 
          Tim Madani akan membalas sesegera mungkin!
        </p>
      </section>

      {/* Info Kontak */}
      <section className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto mt-7 sm:mt-12 mb-7 animate-sectionIn">
        <div className="grid sm:grid-cols-3 gap-6">
          <CardAnim delay={0.10}>
            <div className="flex flex-col items-center text-center">
              <span className="rounded-full bg-gradient-to-br from-[#019164]/80 to-[#2E7D32]/80 text-white w-12 h-12 flex items-center justify-center text-2xl mb-2 shadow-lg">
                <i className="fa fa-envelope"></i>📧
              </span>
              <span className="text-xs text-gray-500 mb-1">Email</span>
              <b className="text-[#019164] text-base">info@sditmadani.org</b>
            </div>
          </CardAnim>
          <CardAnim delay={0.18}>
            <div className="flex flex-col items-center text-center">
              <span className="rounded-full bg-gradient-to-br from-[#ffb55c]/80 to-[#ef262c]/80 text-white w-12 h-12 flex items-center justify-center text-2xl mb-2 shadow-lg">☎️</span>
              <span className="text-xs text-gray-500 mb-1">Telepon</span>
              <b className="text-[#ef262c] text-base">+6221 5426 0919</b>
              <span className="text-xs mt-1 text-gray-700">WA SDIT: 0896-2579-4890<br />WA SMPIT/PP: 0813-1478-4263</span>
            </div>
          </CardAnim>
          <CardAnim delay={0.26}>
            <div className="flex flex-col items-center text-center">
              <span className="rounded-full bg-gradient-to-br from-[#9fd2f6]/80 to-[#267de2]/80 text-white w-12 h-12 flex items-center justify-center text-2xl mb-2 shadow-lg">📍</span>
              <span className="text-xs text-gray-500 mb-1">Alamat</span>
              <b className="text-[#267de2] text-base">
                Jl. Madani, Perumnas 2, Parungpanjang,<br />Kab. Bogor, Jawa Barat 16360
              </b>
            </div>
          </CardAnim>
        </div>
      </section>

      {/* Form Kontak */}
      <section className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto mb-8 animate-sectionIn">
        <CardAnim delay={0.35}>
          <h2 className="text-lg sm:text-xl font-bold text-[#019164] mb-4 text-center">Formulir Kontak Cepat</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={form.nama}
              onChange={handleChange}
              required
              className="rounded-full px-4 py-3 bg-[#f6fdfb] border border-[#d5e8da] focus:outline-[#019164] text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Alamat Email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-full px-4 py-3 bg-[#f6fdfb] border border-[#d5e8da] focus:outline-[#019164] text-base"
            />
            <textarea
              name="pesan"
              rows={4}
              placeholder="Tulis pesan, kritik, saran, atau pertanyaan..."
              value={form.pesan}
              onChange={handleChange}
              required
              className="rounded-2xl px-4 py-3 bg-[#f6fdfb] border border-[#d5e8da] focus:outline-[#019164] text-base resize-none"
            />
            <button
              type="submit"
              className="rounded-full px-8 py-2 mt-1 mx-auto bg-gradient-to-r from-[#019164] to-[#2E7D32] text-white font-semibold text-base shadow hover:scale-105 hover:brightness-110 transition-all"
            >Kirim Pesan</button>
          </form>
          {success && <div className="mt-3 text-green-600 font-bold text-center animate-fadeIn">Pesan berhasil terkirim!</div>}
        </CardAnim>
      </section>

      {/* Animasi style */}
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
        @keyframes sectionIn {
          0% { opacity: 0; transform: translateY(60px);}
          100% { opacity: 1; transform: none;}
        }
        @keyframes bubble {
          0%,100% { transform: scale(1) translateY(0);}
          50% { transform: scale(1.2) translateY(-10px);}
        }
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(.39,.575,.565,1) both; }
        .animate-heroIn { animation: heroIn 1.3s cubic-bezier(.39,.575,.565,1) both; }
        .animate-dropIn { animation: dropIn 1.1s cubic-bezier(.39,.575,.565,1) both; }
        .animate-sectionIn { animation: sectionIn 1.1s cubic-bezier(.39,.575,.565,1) both; }
        .animate-bubble { animation: bubble 3s ease-in-out infinite; }
      `}</style>

      {/* Bottom Spacer */}
      <div className="h-12 sm:h-20"></div>
    </div>
  );
}
