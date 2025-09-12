import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import bgNoise from "../assets/bg.png";
import artikel1 from "../assets/course1.jpg";
import artikel2 from "../assets/event2.jpg";
import artikel3 from "../assets/course2.jpg";
import artikel4 from "../assets/dzikir.jpg";
import artikel5 from "../assets/event.jpg";
import { useNavigate } from "react-router-dom";

// Intersection observer animasi
function useSectionInView(options = {}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.18, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

// Card artikel animasi
function ArtikelCard({ data, delay = 0 }) {
  const [ref, visible] = useSectionInView();
  return (
    <div
      ref={ref}
      className={`relative group bg-white rounded-2xl shadow-lg border border-[#e0eae2] overflow-hidden transition-all duration-800 
                  ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-7 scale-95"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-52 sm:h-64 object-cover transition-transform group-hover:scale-105 duration-700"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 bg-gradient-to-r from-[#019164] to-[#2E7D32] text-white px-3 py-1 rounded-lg text-xs font-bold shadow filter brightness-95">
          {data.category}
        </span>
      </div>
      <div className="px-4 pt-4 pb-5 flex flex-col h-[185px]">
        <div className="flex items-center gap-2 text-xs text-[#447335] mb-1">
          <span className="font-bold">{data.author}</span>
          <span>·</span>
          <span>{data.date}</span>
        </div>
        <h3 className="font-semibold text-[#1A2B3B] text-lg mb-2 group-hover:text-[#019164] transition duration-300">{data.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{data.excerpt}</p>
        <button
          className="mt-4 w-max rounded-full px-5 py-2 bg-gradient-to-r from-[#019164] to-[#2E7D32] text-white font-semibold text-sm shadow hover:scale-105 hover:brightness-110 transition-all focus:outline-none animate-pop"
          onClick={data.onRead}
        >Baca Selengkapnya</button>
      </div>
    </div>
  );
}

// Dummy data artikel contoh
const dataArtikel = [
  {
    image: artikel1,
    category: "Pendidikan",
    title: "5 Tips Belajar Menyenangkan untuk Anak SD",
    excerpt: "Bagaimana caranya agar belajar tidak membosankan dan membuat anak aktif? Simak tips kreatif ini!",
    author: "Admin Madani",
    date: "18 Juli 2025",
    onRead: () => window.alert("Baca artikel 1 (simulasi)"),
  },
  {
    image: artikel2,
    category: "Kegiatan",
    title: "Laporan Fieldtrip ke Museum Nasional",
    excerpt: "Siswa antusias saat fieldtrip ke Museum Nasional. Banyak pengetahuan & pengalaman baru didapatkan.",
    author: "Guru Kelas 4",
    date: "12 Juli 2025",
    onRead: () => window.alert("Baca artikel 2 (simulasi)"),
  },
  {
    image: artikel3,
    category: "Inspirasi",
    title: "Kisah Siswa Hafal 5 Juz Sebelum Lulus",
    excerpt: "Inspirasi dari siswa SDIT Madani yang sukses menghafal 5 Juz Al-Qur’an, berikut kisah dan tipsnya.",
    author: "Ustadzah Hanif",
    date: "9 Juli 2025",
    onRead: () => window.alert("Baca artikel 3 (simulasi)"),
  },
  {
    image: artikel4,
    category: "Prestasi",
    title: "Juara Lomba Tahfidz SD Se-Kabupaten",
    excerpt: "Prestasi membanggakan! Siswa SDIT Madani menjadi juara lomba tahfidz tingkat kabupaten.",
    author: "Admin",
    date: "2 Juli 2025",
    onRead: () => window.alert("Baca artikel 4 (simulasi)"),
  },
  {
    image: artikel5,
    category: "Parenting",
    title: "Peran Orangtua dalam Pendidikan Karakter",
    excerpt: "Bagaimana mendidik karakter sejak dini di rumah? Panduan singkat dan aplikatif untuk keluarga.",
    author: "Tim Madani",
    date: "27 Juni 2025",
    onRead: () => window.alert("Baca artikel 5 (simulasi)"),
  },
];

export default function Artikel() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f9fafb] min-h-screen">
      {/* Hero Section */}
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
          className="mx-auto w-14 h-14 sm:w-24 sm:h-24 mb-3 z-10 animate-dropIn"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1A2B3B] mb-2 z-10 animate-dropIn text-center px-2 shadow-sm">
          Artikel & Berita Madani
        </h1>
        <p className="text-sm sm:text-lg text-gray-700 max-w-xl mx-auto z-10 animate-fadeIn text-center px-3 font-semibold mb-1">
          Update informasi, tips, inspirasi, dan prestasi terbaru dari SDIT-SMPIT-Ponpes Al Madani.
        </p>
      </section>

      {/* Kategori filter */}
      <section className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-8 mt-8 sm:mt-10 animate-sectionIn">
        <button className="bg-[#e5f7eb] text-[#019164] rounded-full px-4 py-2 text-xs sm:text-base font-semibold shadow-sm hover:bg-[#d1f7e0] transition-all">Semua</button>
        <button className="bg-[#fff7e1] text-[#d88f11] rounded-full px-4 py-2 text-xs sm:text-base font-semibold shadow-sm hover:bg-[#ffefc2] transition-all">Pendidikan</button>
        <button className="bg-[#e5edff] text-[#1e5ad7] rounded-full px-4 py-2 text-xs sm:text-base font-semibold shadow-sm hover:bg-[#d5e6ff] transition-all">Kegiatan</button>
        <button className="bg-[#fff2f6] text-[#e9327a] rounded-full px-4 py-2 text-xs sm:text-base font-semibold shadow-sm hover:bg-[#ffdbe8] transition-all">Prestasi</button>
        <button className="bg-[#edfff8] text-[#15bf91] rounded-full px-4 py-2 text-xs sm:text-base font-semibold shadow-sm hover:bg-[#d6fff1] transition-all">Inspirasi</button>
        <button className="bg-[#fcf2ed] text-[#d88211] rounded-full px-4 py-2 text-xs sm:text-base font-semibold shadow-sm hover:bg-[#ffe4c9] transition-all">Parenting</button>
      </section>

      {/* Daftar Artikel */}
      <section className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-10 animate-sectionIn">
        {dataArtikel.map((item, idx) =>
          <ArtikelCard key={idx} data={item} delay={0.10 + idx*0.13} />
        )}
      </section>

      {/* Footer/banner ajakan */}
      <section className="max-w-xs sm:max-w-3xl mx-auto bg-gradient-to-r from-[#dafee8] via-[#fdfff3] to-[#fff8e0] rounded-2xl px-5 sm:px-12 py-5 mt-4 sm:mt-12 mb-14 text-center shadow-lg border border-[#e0eae2] animate-sectionIn">
        <h3 className="font-bold text-base sm:text-xl text-[#019164] mb-1">Punya tulisan, berita, atau karya dari Madani?</h3>
        <p className="text-gray-600 text-sm sm:text-base font-medium mb-3">Kirimkan ke kami dan karya Anda bisa tampil di halaman ini!</p>
        <button
          type="button"
          className="rounded-full px-6 py-2 bg-gradient-to-tr from-[#019164] to-[#2E7D32] text-white font-semibold text-base shadow hover:scale-105 hover:brightness-110 transition-all"
          onClick={() => navigate('/kontak')}
        >Kirim Karya/Saran</button>
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
        @keyframes pop {
          0% { transform: scale(0.85);}
          83% { transform: scale(1.08);}
          100% { transform: scale(1);}
        }
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(.39,.575,.565,1) both; }
        .animate-heroIn { animation: heroIn 1.3s cubic-bezier(.39,.575,.565,1) both; }
        .animate-dropIn { animation: dropIn 1.1s cubic-bezier(.39,.575,.565,1) both; }
        .animate-sectionIn { animation: sectionIn 1s cubic-bezier(.39,.575,.565,1) both; }
        .animate-bubble { animation: bubble 3s ease-in-out infinite; }
        .animate-pop { animation: pop 0.6s cubic-bezier(.39,.575,.565,1) 1; }
      `}</style>
    </div>
  );
}
