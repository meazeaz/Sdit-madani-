import React, { useRef, useEffect, useState } from "react";

import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";

// Data fasilitas sekolah
const fasilitas = [
  {
    title: "Kelas Ber-AC",
    color: "#809D3C",
    image: course1,
    desc: "Ruang kelas nyaman, ber-AC, mendukung pembelajaran yang kondusif.",
  },
  {
    title: "Lab Sains & Komputer",
    color: "#A9C46C",
    image: course2,
    desc: "Laboratorium sains dan komputer modern untuk praktik dan eksplorasi.",
  },
  {
    title: "Masjid & Lab Tahfizh",
    color: "#FFBF78",
    image: course3,
    desc: "Masjid luas dan lab tahfizh untuk pembinaan karakter dan hafalan Al-Qur'an.",
  },
  {
    title: "Masjid & Lab Tahfizh",
    color: "#FFBF78",
    image: course3,
    desc: "Masjid luas dan lab tahfizh untuk pembinaan karakter dan hafalan Al-Qur'an.",
  },
  {
    title: "Masjid & Lab Tahfizh",
    color: "#A9C46C",
    image: course3,
    desc: "Masjid luas dan lab tahfizh untuk pembinaan karakter dan hafalan Al-Qur'an.",
  },

  {
    title: "Masjid & Lab Tahfizh",
    color: "#809D3C",
    image: course3,
    desc: "Masjid luas dan lab tahfizh untuk pembinaan karakter dan hafalan Al-Qur'an.",
  },
];

// Animasi slide-up saat masuk viewport
function useInViewAnimation(options = {}) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

// Card fasilitas dengan animasi slide-up dan hover gambar
function FasilitasCard({ title, image, desc, color, delay = 0 }) {
  const [ref, inView] = useInViewAnimation();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`fasilitas-card rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs transition-all duration-300 ${
        inView ? "slide-up" : ""
      }`}
      style={{
        background: color,
        animationDelay: inView ? `${delay}s` : undefined,
        opacity: inView ? 1 : 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-40 rounded-t-2xl overflow-hidden flex items-center justify-center relative">
        <img
          src={image}
          alt={title}
          className={`object-cover w-full h-full transition-all duration-300 ${hovered ? "scale-105 shadow-2xl z-10" : ""}`}
        />
      </div>
      <div className="p-5 flex flex-col flex-1 w-full">
        <h5 className="font-bold text-lg mb-2 text-white text-center">{title}</h5>
        <p className="text-[#DBE4C9] font-bold text-base text-center">{desc}</p>
      </div>
    </div>
  );
}

// Komponen untuk teks dengan animasi
function AnimatedText({ children, className, delay = 0 }) {
  const [ref, inView] = useInViewAnimation();
  
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? "text-slide-up" : "opacity-0 translate-y-8"}`}
      style={{
        transition: "opacity 0.8s ease, transform 0.8s ease",
        transitionDelay: inView ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  );
}

export default function Team() {
  // Hover state untuk judul dan subjudul
  const [hoverTitle, setHoverTitle] = useState(false);
  const [hoverSub, setHoverSub] = useState(false);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedText 
          delay={0.1}
        >
          <h2
            className={`text-center font-bold text-3xl md:text-4xl mb-4 transition-all duration-500 cursor-pointer ${
              hoverTitle ? "text-[#1B5E20] scale-105" : "text-[#2E7D32] scale-100"
            }`}
            onMouseEnter={() => setHoverTitle(true)}
            onMouseLeave={() => setHoverTitle(false)}
          >
            Keunggulan Fasilitas Sekolah Madani
          </h2>
        </AnimatedText>
        
        <AnimatedText 
          delay={0.3}
        >
          <p
            className={`text-center max-w-2xl mx-auto text-lg md:text-xl mb-12 transition-all duration-500 cursor-pointer ${
              hoverSub ? "text-[#1B5E20] scale-105" : "text-gray-600 scale-100"
            }`}
            onMouseEnter={() => setHoverSub(true)}
            onMouseLeave={() => setHoverSub(false)}
          >
            SDIT Madani Parung Panjang unggul dengan fasilitas lengkap seperti kelas ber-AC, laboratorium sains & komputer, masjid, lab tahfizh, dan lapangan olahraga untuk menunjang pembelajaran akademik dan agama.
          </p>
        </AnimatedText>
        
        <div className="flex justify-center gap-8 flex-wrap">
          {fasilitas.map((item, idx) => (
            <FasilitasCard
              key={item.title}
              title={item.title}
              image={item.image}
              desc={item.desc}
              color={item.color}
              delay={0.15 + idx * 0.15}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .fasilitas-card {
          opacity: 0;
          transform: translateY(40px);
        }
        .fasilitas-card.slide-up {
          animation: slideUpAppear 0.8s cubic-bezier(.39,.575,.565,1) both;
        }
        
        .text-slide-up {
          animation: textSlideUp 0.8s cubic-bezier(.39,.575,.565,1) both;
        }
        
        @keyframes slideUpAppear {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          60% {
            opacity: 0.7;
            transform: translateY(-10px) scale(1.04);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes textSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}