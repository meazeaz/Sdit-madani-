import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import semua gambar kegiatan siswa
import eventImg from "../assets/event.jpg";
import dzikirImg from "../assets/dzikir.jpg";
import event3Img from "../assets/event3.jpg";
import event2Img from "../assets/event2.jpg";
import event4Img from "../assets/event4.jpg";

// Data kegiatan siswa (sudah termasuk event2 dan event4)
const kegiatanSiswa = [
  {
    title: "Sholat Dhuha",
    image: eventImg,
    desc: "Memulai hari dengan melaksanakan sholat dhuha secara berjama'ah sebelum pelaksanaan belajar mengajar.",
    link: eventImg,
  },
  {
    title: "Dzikir Al-Ma'tsurat",
    image: dzikirImg,
    desc: "Pembacaan dzikir Al-Ma'sturat dipimpin oleh salah satu siswa secara bergantian, hati lebih tenang dan tentram.",
    link: dzikirImg,
  },
  {
    title: "Senam",
    image: event3Img,
    desc: "Pelaksaan senam dilaksanakan secara rutin disekolah untuk menjaga kondisi stamina selalu fit.",
    link: event3Img,
  },
  {
    title: "Mengaji",
    image: event2Img,
    desc: "Mengaji setiap hari untuk memperdalam pemahaman Al-Qur'an dan meningkatkan kualitas spiritual.",
    link: event2Img,
  },
  {
    title: "Olahraga Rutin",
    image: event4Img,
    desc: "Aktivitas olahraga rutin untuk menjaga kebugaran tubuh dan meningkatkan semangat belajar.",
    link: event4Img,
  },
];

// Hook animasi morph-in saat masuk viewport
function useInViewAnimation(options = {}) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
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

// Komponen card kegiatan morph-in
function KegiatanCard({ image, title, desc, inView, delay = 0 }) {
  const style = {
    animationDelay: inView ? `${delay}s` : undefined,
    opacity: inView ? 1 : 0,
    minHeight: 380,
    maxWidth: 400,
    margin: "0 auto",
  };
  return (
    <div
      className={`kegiatan-card-morph bg-white rounded-[2rem] p-8 flex flex-col items-center border border-[#2E7D32]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 mx-auto ${inView ? "morph-in" : ""}`}
      style={style}
    >
      <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          style={{ borderRadius: "1.2rem" }}
        />
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 bg-[#2E7D32] text-white rounded-full p-2 shadow hover:scale-110 transition"
          title="Lihat foto"
        >
          <i className="fa fa-search"></i>
        </a>
      </div>
      <h4 className="font-semibold text-lg mb-2 text-center text-[#2E7D32]">{title}</h4>
      <p className="text-gray-600 text-base text-justify">{desc}</p>
    </div>
  );
}

export default function KegiatanSiswaSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [sliderRef, sliderInView] = useInViewAnimation();
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) setNavigationReady(true);
  }, [prevRef, nextRef]);

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight text-[#2E7D32]">
            Kegiatan <span className="text-[#2E7D32]">Siswa</span>
          </AnimatedText>
          <AnimatedText as="p" className="text-gray-600 max-w-2xl mx-auto text-base" delay={0.15}>
            Untuk menjaga kebugaran lahir dan batin para siswa-siswi di SDIT Madani mengadakan kegiatan rutin siswa.
          </AnimatedText>
        </div>
        {/* Wrapper untuk posisi tombol di samping slider */}
        <div className="relative" ref={sliderRef}>
          {/* Tombol prev */}
          <button
            ref={prevRef}
            className="custom-swiper-nav absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl transition-all duration-200 shadow"
            aria-label="Sebelumnya"
            style={{ marginLeft: '-2.5rem' }}
          >
            &#8592;
          </button>
          {/* Swiper */}
          {navigationReady && (
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 20 },
                900: { slidesPerView: 2, spaceBetween: 32 },
                1280: { slidesPerView: 3, spaceBetween: 40 },
              }}
              style={{ paddingBottom: "3.5rem" }}
            >
              {kegiatanSiswa.map((item, idx) => (
                <SwiperSlide key={item.title}>
                  <KegiatanCard
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    inView={sliderInView}
                    delay={idx * 0.13}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {/* Tombol next */}
          <button
            ref={nextRef}
            className="custom-swiper-nav absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl transition-all duration-200 shadow"
            aria-label="Selanjutnya"
            style={{ marginRight: '-2.5rem' }}
          >
            &#8594;
          </button>
        </div>
      </div>
      <style>{`
        .kegiatan-card-morph {
          opacity: 0;
          transform: scale(0.93) translateY(40px);
        }
        .kegiatan-card-morph.morph-in {
          animation: morphInAppear 0.9s cubic-bezier(.39,.575,.565,1) both;
        }
        .morph-in {
          animation: morphInAppear 0.9s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes morphInAppear {
          0% {
            opacity: 0;
            transform: scale(0.85) rotate(-6deg) skewY(4deg) translateY(40px);
            border-radius: 40% 60% 60% 40% / 50% 40% 60% 50%;
          }
          60% {
            opacity: 0.7;
            transform: scale(1.04) rotate(2deg) skewY(-2deg) translateY(-10px);
            border-radius: 60% 40% 50% 50% / 40% 60% 50% 60%;
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) skewY(0) translateY(0);
            border-radius: 2rem;
          }
        }
        .custom-swiper-nav:active {
          transform: scale(0.95);
        }
        @media (max-width: 1023px) {
          .kegiatan-card-morph {
            padding: 1.2rem !important;
            border-radius: 1.1rem !important;
            min-height: 260px !important;
            max-width: 98vw !important;
          }
          .custom-swiper-nav {
            width: 2.2rem !important;
            height: 2.2rem !important;
            font-size: 1.2rem !important;
            margin-left: -1.1rem !important;
            margin-right: -1.1rem !important;
          }
        }
        @media (max-width: 767px) {
          .kegiatan-card-morph {
            padding: 0.7rem !important;
            border-radius: 0.8rem !important;
            min-height: 180px !important;
            max-width: 98vw !important;
          }
          .custom-swiper-nav {
            width: 1.5rem !important;
            height: 1.5rem !important;
            font-size: 1rem !important;
            margin-left: -0.6rem !important;
            margin-right: -0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
