import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import gambar
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course.jpg";
import leftArrow from "../assets/left-arrow.png"; 
import rightArrow from "../assets/right-arrow.png"; 


// Data program unggulan  
const unggulanPrograms = [
  {
    title: "Menghafal Al-Qur'an",
    image: course1,
    desc: `Tahsin & Tahfidz merupakan program perbaikan membaca Al-Qur'an, dan Tahfidz merupakan program Menghafal Al-Quran yang dimulai dari juz 30 seterusnya. Melalui program tersebut Alhamdulillah lulusan SDIT Madani memiliki hafalan minimal 1 sampai 3 Juz. Tahsin/tahfidz merupakan program unggulan SDIT Madani yang menjadi pedoman dasar pembelajaran di sekolah agar semua siswa dekat dengan Al-Qu'an.`,
  },
  {
    title: "Mabit",
    image: course2,
    desc: `Pada agenda Mabit ini Peserta didik akan dibekali dengan bimbingan ruhiyah, Para siswa akandibimbing untuk belajar dan membiasakan diri melaksanakan Shalat Tahajjud, Dhuha, Berdzikir pagi-petang serta Tilawah Al-Quran.`,
  },
  {
    title: "Market Day",
    image: course3,
    desc: `Market day merupakan program dimana satu hari dikhususkan bagi para siswa/siswi untuk berjualan dagangan mereka sendiri. Harapannya para siswa/siswi SDIT Madani bisa belajar berbisnis dan muamalah sejak dini.`,
  },
  {
    title: "SuperCamp",
    image: course5,
    desc: `Madani SuperCamp adalah nama dari Program Camping di SDIT Madani. SuperCamp bertujuan untuk melatih mental dan fisik para siswa/siswi SDIT Madani dan tak lupa dibarengi dengan games yang menambah softskill bagi para siswa. selain itu, di Madani SuperCamp ini Siswa/Siswi dibekali dengan Program peningkatan Ruhiyah.`,
  },
  {
    title: "Outing Class",
    image: course4,
    desc: `Para pendidik di SDIT Madani juga tak lupa untuk memberikan refreshing bagi para muridnya, OutingClass juga merupakan salah satu program unggulan selain jalan-jalan para murid juga dibarengi dengan pengetahuan tambahan selama menajalani OutingClass.`,
  },
];

// Komponen card dengan animasi morph-in per card
function CardMorph({ image, title, desc, inView, delay = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const style = {
    animationDelay: inView ? `${delay}s` : undefined,
    opacity: inView ? 1 : 0,
    margin: "0 auto",
  };
  return (
    <div
      className={`program-card-morph bg-white rounded-3xl p-8 flex flex-col items-center border border-[#2E7D32]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mx-auto h-full ${inView ? "morph-in" : ""}`}
      style={style}
    >
      <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          style={{ borderRadius: "1rem" }}
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h4 className="font-bold text-xl mb-4 text-center text-[#2E7D32]">{title}</h4>
      <div className="flex-1 flex flex-col w-full">
        <p className={`text-gray-600 text-base text-justify mb-4 ${expanded ? "" : "line-clamp-4"}`}>
          {desc}
        </p>
        {!expanded && (
          <button
            className="mt-auto inline-flex items-center text-[#2E7D32] font-semibold hover:text-[#1B5E20] transition-colors"
            onClick={() => setExpanded(true)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            Selengkapnya
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

// Hook animasi morph-in saat masuk viewport
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

// Komponen judul dan deskripsi utama dengan animasi morph-in
function AnimatedText({ as = "h2", children, className = "", delay = 0 }) {
  const [ref, inView] = useInViewAnimation();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ${className} ${inView ? "morph-in" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "scale(0.9) translateY(40px)",
        animationDelay: inView ? `${delay}s` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}

export default function UnggulanSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [sliderRef, sliderInView] = useInViewAnimation();
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) setNavigationReady(true);
  }, [prevRef, nextRef]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#F0F7F0] to-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText 
            as="h2" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2E7D32]"
          >
            Program Unggulan Kami
          </AnimatedText>
          <AnimatedText 
            as="p" 
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl" 
            delay={0.18}
          >
            Program unggulan SDIT Madani menunjang pendidikan dan karakter siswa secara menyeluruh.
          </AnimatedText>
        </div>
        <div className="relative" style={{ minHeight: 400 }}>
          {/* Tombol navigasi di kiri dan kanan slider */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#2E7D32] hover:bg-[#2E7D32] rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Sebelumnya"
            style={{ marginLeft: "-2.5rem" }}
          >
            <img src={leftArrow} alt="Sebelumnya" className="w-7 h-7" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#2E7D32] hover:bg-[#2E7D32] rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Selanjutnya"
            style={{ marginRight: "-2.5rem" }}
          >
            <img src={rightArrow} alt="Selanjutnya" className="w-7 h-7" />
          </button>
          <div className="relative mb-12" ref={sliderRef}>
            {navigationReady && (
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                pagination={{ clickable: true, el: '.custom-pagination' }}
                loop={true}
                spaceBetween={32}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 24 },
                  768: { slidesPerView: 2, spaceBetween: 28 },
                  1024: { slidesPerView: 3, spaceBetween: 32 },
                  1280: { slidesPerView: 3, spaceBetween: 40 },
                }}
                className="pb-12"
              >
                {unggulanPrograms.map((item, idx) => (
                  <SwiperSlide key={item.title}>
                    <div className="h-full py-4">
                      <CardMorph
                        image={item.image}
                        title={item.title}
                        desc={item.desc}
                        inView={sliderInView}
                        delay={idx * 0.12}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <div className="custom-pagination flex justify-center mt-8 space-x-2"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .program-card-morph {
          opacity: 0;
          transform: scale(0.9) translateY(40px);
        }
        .program-card-morph.morph-in {
          animation: morphInAppear 0.9s cubic-bezier(.39,.575,.565,1) both;
        }
        .morph-in {
          animation: morphInAppear 0.9s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes morphInAppear {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-8deg) skewY(4deg) translateY(40px);
            border-radius: 60% 40% 60% 40% / 50% 60% 40% 50%;
          }
          60% {
            opacity: 0.7;
            transform: scale(1.04) rotate(3deg) skewY(-2deg) translateY(-10px);
            border-radius: 50% 60% 40% 60% / 60% 40% 60% 40%;
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) skewY(0) translateY(0);
            border-radius: 1.5rem;
          }
        }
        .custom-swiper-nav:active {
          transform: scale(0.95);
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        /* Style untuk pagination bullets */
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ccc;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #2E7D32;
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }
        @media (max-width: 1023px) {
          .program-card-morph {
            padding: 1.5rem !important;
            border-radius: 1.25rem !important;
          }
        }
        @media (max-width: 767px) {
          .program-card-morph {
            padding: 1.25rem !important;
            border-radius: 1rem !important;
          }
          .custom-swiper-nav {
            width: 3rem !important;
            height: 3rem !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}