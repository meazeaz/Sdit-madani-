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
      <span className="text-[#2E7D32] font-semibold">Prestasi SDIT AL MADANI</span>
    </nav>
  );
}

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
      { threshold: 0.21, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

function CardAnim({ title, children, delay = 0, icon = null }) {
  const [cardRef, visible] = useSectionInView();
  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-md border border-[#d3e7d1] px-6 sm:px-10 py-6 sm:py-8 mb-5 transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-3">
        {icon && <span className="inline-block text-2xl mr-3">{icon}</span>}
        <h3 className="text-[#2E7D32] font-semibold text-lg sm:text-xl">{title}</h3>
      </div>
      <div className="text-gray-700 text-sm sm:text-base">{children}</div>
    </div>
  );
}

// Galeri Animasi
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
      }, 11);
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

// DATA PRESTASI BARU berdasarkan foto yang dikirim
const dataPrestasi = [
  {
    title: "MARIYAH AL QIBTIYYAH - Juara 1 Lomba Karate O2SN Tahun 2025",
    desc: "Mariyah Al Qibtiyyah berhasil meraih juara 1 dalam Lomba Karate O2SN Tahun 2025, menunjukkan prestasi gemilang di bidang olahraga bela diri.",
    icon: "🥋",
    delay: 0.12,
  },
  {
    title: "MAHARDIKA FATTHANDINULLAH - Juara 1 Lomba Cerdas Cermat OSN Tahun 2025",
    desc: "Mahardika Fatthandinullah meraih juara 1 Lomba Cerdas Cermat OSN Tahun 2025, membuktikan keunggulan akademik siswa SDIT Al Madani.",
    icon: "🏆",
    delay: 0.19,
  },
  {
    title: "HIDAYAT - Juara 1 Lomba Cerdas Cermat OSN Tahun 2025",
    desc: "Hidayat berhasil meraih juara 1 Lomba Cerdas Cermat OSN Tahun 2025, menambah deretan prestasi akademik sekolah di tingkat nasional.",
    icon: "🏆",
    delay: 0.27,
  },
  {
    title: "RADITYA AKMAL AL MUZHAFFAR - Juara 1 Lomba Cerdas Cermat OSN Tahun 2025",
    desc: "Raditya Akmal Al Muzhaffar meraih juara 1 Lomba Cerdas Cermat OSN Tahun 2025, menunjukkan kemampuan intelektual yang luar biasa.",
    icon: "🏆",
    delay: 0.35,
  },
  {
    title: "GHITHRIB RIZAL AHSANI - Juara 1 Lomba Maca Jeung Nulis Basa Sunda",
    desc: "Ghithrib Rizal Ahsani berhasil meraih juara 1 dalam Lomba Maca Jeung Nulis Basa Sunda, melestarikan budaya lokal melalui prestasi.",
    icon: "📝",
    delay: 0.42,
  },
  {
    title: "MUHAMMAD ZEMA ADZKIA JABBAR - Juara 1 Lomba MHO Kecamatan 2025",
    desc: "Muhammad Zema Adzkia Jabbar meraih juara 1 Lomba MHO Kecamatan 2025, menunjukkan bakat dan kemampuan di bidang tersebut.",
    icon: "⭐",
    delay: 0.50,
  },
  {
    title: "ALVINA PUTRI SETIAWAN - Juara 2 Lomba Karate OSN Tahun 2025",
    desc: "Alvina Putri Setiawan berhasil meraih juara 2 Lomba Karate OSN Tahun 2025, membuktikan ketangguhan di bidang olahraga bela diri.",
    icon: "🥈",
    delay: 0.58,
  },
  {
    title: "SAHIRA PUTRI RAMADANIZA - Juara 2 Lomba MHO Kecamatan 2025",
    desc: "Sahira Putri Ramadaniza meraih juara 2 Lomba MHO Kecamatan 2025, menunjukkan prestasi yang membanggakan di tingkat kecamatan.",
    icon: "⭐",
    delay: 0.65,
  },
  {
    title: "KHUBAIB AL ARSYAD - Juara 3 Lomba Karate OSN Tahun 2025",
    desc: "Khubaib Al Arsyad berhasil meraih juara 3 Lomba Karate OSN Tahun 2025, menambah koleksi medali sekolah di bidang olahraga.",
    icon: "🥉",
    delay: 0.72,
  },
  {
    title: "MUHAMMAD ZEMI REZKY - Juara 3 Lomba MTO Kecamatan Tahun 2025",
    desc: "Muhammad Zemi Rezky meraih juara 3 Lomba MTO Kecamatan Tahun 2025, menunjukkan kemampuan kompetitif di tingkat daerah.",
    icon: "🏅",
    delay: 0.80,
  },
  {
    title: "MUHAMMAD FARID ROHMAT - Juara 3 Lomba MTO Kecamatan Tahun 2025",
    desc: "Muhammad Farid Rohmat berhasil meraih juara 3 Lomba MTO Kecamatan Tahun 2025, membuktikan konsistensi prestasi siswa SDIT Al Madani.",
    icon: "🏅",
    delay: 0.87,
  }
];

const galeriPrestasi = [
  course1, course2, course3, course4, eventImg, event3Img, dzikirImg, event2Img, event4Img
];

export default function Prestasi() {
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
          Prestasi SDIT AL MADANI
        </h1>
        <Breadcrumb />
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-sm sm:max-w-2xl mx-auto z-10 animate-fadeIn text-center px-3">
          SDIT Al Madani terus menorehkan berbagai prestasi akademik maupun non-akademik di tingkat daerah, provinsi hingga nasional sebagai bukti kualitas pembinaan karakter dan potensi siswa.
        </p>
      </section>

      {/* Daftar Prestasi */}
      <section className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto mt-8 sm:mt-12 mb-8 sm:mb-12 animate-sectionIn">
        {dataPrestasi.map((p, idx) => (
          <CardAnim key={idx} title={p.title} delay={p.delay} icon={p.icon}>
            <div className="text-gray-700">
              {p.desc}
            </div>
          </CardAnim>
        ))}
      </section>

      {/* Galeri Foto Prestasi dengan Animasi */}
      <section className="max-w-xs sm:max-w-4xl md:max-w-7xl mx-auto animate-sectionIn mb-12 sm:mb-16">
        <h2 className="text-lg sm:text-2xl font-bold text-[#2E7D32] mb-4 sm:mb-8 text-center">Galeri Prestasi Siswa</h2>
        <GalleryAutoScroll images={galeriPrestasi} />
      </section>

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