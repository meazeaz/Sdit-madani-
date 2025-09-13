import React, { useRef, useEffect, useState } from "react";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course.jpg";
import eventImg from "../assets/event.jpg";
import dzikirImg from "../assets/dzikir.jpg";
import event3Img from "../assets/event3.jpg";
import event2Img from "../assets/event2.jpg";
import event4Img from "../assets/event4.jpg";
import logo from "../assets/logo.png";
import bgNoise from "../assets/bg.png";
import { useNavigate } from "react-router-dom";

// Breadcrumb interaktif
function Breadcrumb() {
  const navigate = useNavigate();
  return (
    <nav
      className="flex items-center justify-center text-xs sm:text-sm text-gray-500 mb-2 animate-fadeIn"
      aria-label="Breadcrumb"
    >
      <span
        className="hover:underline cursor-pointer transition-colors duration-200"
        onClick={() => navigate("/")}
        tabIndex={0}
        onKeyDown={e => e.key === "Enter" && navigate("/")}
        style={{ outline: "none" }}
      >
        Beranda
      </span>
      <span className="mx-1 sm:mx-2">/</span>
      <span className="text-[#2E7D32] font-semibold">Profil SDIT AL MADANI</span>
    </nav>
  );
}

const dataSekolah = {
  nama: "SDIT Al Madani",
  yayasan: "Yayasan Islamic Center Al Madany",
  alamat: "Jl. Madani, Perumnas 2, Parungpanjang, Kabupaten Bogor, Jawa Barat 16360",
  email: "sditmadani@yahoo.com",
  telepon: "0851-5513-9392",
  kepalaSekolah: "Yazid S.Pd",
  akreditasi: "A (Unggul)",

  kurikulum: [
    "Kurikulum Nasional (Kurikulum Merdeka)",
    "Kurikulum Keislaman Terpadu",
    "Tahfidz dan Bahasa Arab",
    "Life Skill & Leadership",
  ],
  fasilitas: [
    "Ruang Kelas Ber-AC",
    "Perpustakaan Digital & Fisik",
    "Laboratorium Komputer",
    "Masjid & Aula Serbaguna",
    "Lapangan Olahraga Multifungsi",
    "Kantin Sehat",
    "Area Parkir Luas",
    "CCTV & Keamanan 24 Jam",
    "Taman Bermain Edukatif",
    "Kelas Tahfidz Eksklusif",
  ],
  ekstrakurikuler: [
  "Karate",
  "Futsal", 
  "Voli",
  "Badminton",
  "Tenis Meja",
  "Memanah",
  "Renang",
  "Pramuka",
  "Melukis",
  "Seni Tari",
  "Komputer",
  "Dokter Kecil",
  "Takhosus"
  ],
};

const galeri = [
  course1,
  course2,
  course3,
  course4,
  course5,
  eventImg,
  dzikirImg,
  event3Img,
  event2Img,
  event4Img,
];

// ANIMASI untuk Visi Misi Tujuan (Intersection Observer, fade+translate)
function useSectionInView(options = {}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.21, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

function CardAnim({ title, children, delay = 0 }) {
  const [cardRef, visible] = useSectionInView();
  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-md border border-[#d3e7d1] px-6 sm:px-10 py-6 sm:py-8 mb-5 transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      <h3 className="text-[#2E7D32] font-semibold text-lg sm:text-xl mb-2">{title}</h3>
      <div className="text-gray-700 text-sm sm:text-base">{children}</div>
    </div>
  );
}

// Carousel horizontal auto scroll
function GalleryAutoScroll({ images }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let interval;
    let isHovered = false;

    function startScroll() {
      interval = setInterval(() => {
        if (!container || isHovered) return;
        container.scrollLeft += 1.2;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 2) {
          container.scrollLeft = 0;
        }
      }, 12);
    }
    startScroll();

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const allImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-x-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-4 px-2"
        style={{
          scrollBehavior: "smooth",
          minHeight: 180,
        }}
      >
        {allImages.map((src, idx) => (
          <div
            key={idx}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 min-w-[220px] sm:min-w-[340px] max-w-[90vw] sm:max-w-[400px] animate-galleryIn bg-white"
            style={{
              flex: "0 0 220px",
              height: 140,
              maxWidth: "90vw",
            }}
          >
            <img
              src={src}
              alt={`Galeri ${idx + 1}`}
              className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-110"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes galleryIn {
          0% { opacity: 0; transform: scale(0.97) translateY(60px);}
          100% { opacity: 1; transform: scale(1) translateY(0);}
        }
        .animate-galleryIn { animation: galleryIn 1.2s cubic-bezier(.39,.575,.565,1) both; }
        @media (max-width: 640px) {
          .animate-galleryIn { min-width: 180px !important; height: 120px !important; }
        }
      `}</style>
    </div>
  );
}

export default function Profil() {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f9fafb] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center border-b border-[#e0eae2] overflow-hidden animate-heroIn"
        style={{
          backgroundImage: `url(${bgNoise})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="absolute left-2 top-2 w-6 h-6 sm:left-8 sm:top-8 sm:w-8 sm:h-8 bg-[#e6f7d9] rounded-full blur-xl opacity-70 animate-bubble"></div>
        <div className="absolute right-2 bottom-2 w-6 h-6 sm:right-8 sm:bottom-8 sm:w-8 sm:h-8 bg-[#f8e6b2] rounded-full blur-xl opacity-70 animate-bubble"></div>
        <img
          src={logo}
          alt="Logo SDIT Al Madani"
          className="mx-auto w-20 h-20 sm:w-28 sm:h-28 mb-4 sm:mb-6 z-10 animate-dropIn"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1A2B3B] mb-2 z-10 animate-dropIn text-center px-2">
          Profil SDIT AL MADANI
        </h1>
        <Breadcrumb />
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-sm sm:max-w-2xl mx-auto z-10 animate-fadeIn text-center px-3">
          SDIT Al Madani adalah sekolah Islam terpadu yang berkomitmen membentuk generasi Qur'ani, berakhlak mulia, berprestasi, dan siap menghadapi tantangan global dengan karakter Islami yang kuat.
        </p>
      </section>

      {/* Info Sekolah */}
      <section className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 mt-6 sm:mt-12 mb-8 sm:mb-12 border border-[#e0eae2] animate-sectionIn">
        <h2 className="text-lg sm:text-2xl font-semibold text-[#2E7D32] mb-2 sm:mb-4">Tentang Sekolah</h2>
        <ul className="text-gray-700 text-xs sm:text-base space-y-1 sm:space-y-2">
          <li><b>Nama Sekolah:</b> {dataSekolah.nama}</li>
          <li><b>Yayasan:</b> {dataSekolah.yayasan}</li>
          <li><b>Kepala Sekolah:</b> {dataSekolah.kepalaSekolah}</li>
          <li><b>Akreditasi:</b> {dataSekolah.akreditasi}</li>
          <li><b>Alamat:</b> {dataSekolah.alamat}</li>
          <li><b>Email:</b> {dataSekolah.email}</li>
          <li><b>Telepon:</b> {dataSekolah.telepon}</li>

        </ul>
        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
          <div>
            <h3 className="font-semibold text-[#2E7D32] mb-1 sm:mb-2">Kurikulum</h3>
            <ul className="list-disc ml-4 sm:ml-6 text-gray-700 text-xs sm:text-base">
              {dataSekolah.kurikulum.map((k, i) => (
                <li key={i}>{k}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#2E7D32] mb-1 sm:mb-2">Fasilitas</h3>
            <ul className="list-disc ml-4 sm:ml-6 text-gray-700 text-xs sm:text-base">
              {dataSekolah.fasilitas.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Visi, Misi, Tujuan Section, Animated */}
      <section className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto mt-3 sm:mt-8 mb-8 sm:mb-12 animate-sectionIn">
        <CardAnim title="Visi" delay={0.2}>
          <p>
        Menjadi lembaga pendidikan unggul, profesional, dan bertaraf nasional dalam membentuk generasi rabbani          </p>
        </CardAnim>
        <CardAnim title="Misi" delay={0.35}>
          <ol className="list-decimal ml-5">
            <li>Mewujudkan keunggulan akademik & non-akademik berbasis STEM dan literasi digital.</li>
            <li>Membangun SDM profesional melalui pelatihan guru dan manajemen berbasis teknologi.</li>
            <li>Memenuhi standar nasional dengan kurikulum integratif dan fasilitas modern. </li>
            <li>Membentuk generasi rabbani melalui pembiasaan ibadah, akhlak Qurani, dan parenting islami.</li>
          </ol>
        </CardAnim>
        <CardAnim title="Tujuan" delay={0.5}>
          <ol className="list-decimal ml-5">
            <li>Menghasilkan lulusan berakhlak mulia dan hafal minimal 1 Juz Al-Qur’an.</li>
            <li>Mempersiapkan siswa menjadi pembelajar sepanjang hayat dan siap menghadapi era globalisasi.</li>
            <li>Menjadi sekolah rujukan pendidikan karakter dan prestasi di tingkat nasional.</li>
          </ol>
        </CardAnim>
      </section>

      {/* Ekstrakurikuler */}
      <section className="max-w-xs sm:max-w-2xl md:max-w-6xl mx-auto grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-1 mb-8 sm:mb-12 animate-sectionIn">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 border border-[#e0eae2] animate-sectionIn">
          <h2 className="text-lg sm:text-2xl font-semibold text-[#2E7D32] mb-2 sm:mb-4">Ekstrakurikuler</h2>
          <ul className="list-disc ml-4 sm:ml-6 text-gray-700 text-xs sm:text-base">
            {dataSekolah.ekstrakurikuler.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Galeri Foto: Carousel horizontal looping */}
      <section className="max-w-xs sm:max-w-4xl md:max-w-7xl mx-auto animate-sectionIn mb-12 sm:mb-16">
        <h2 className="text-lg sm:text-2xl font-bold text-[#2E7D32] mb-4 sm:mb-8 text-center">Galeri Kegiatan & Program</h2>
        <GalleryAutoScroll images={galeri} />
      </section>

      {/* Bawah */}
      <div className="h-12 sm:h-24 md:h-32"></div>

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
    </div>
  );
}
