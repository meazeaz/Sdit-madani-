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

// Data program unggulan
const unggulanPrograms = [
  {
    title: "Menghafal Al-Qur'an",
    image: course1,
    desc: `Tahsin & Tahfidz merupakan program perbaikan membaca Al-Qur'an, dan Tahfidz merupakan program Menghafal Al-Quran yang dimulai dari juz 30 seterusnya. Melalui program tersebut Alhamdulillah lulusan SDIT Madani memiliki hafalan minimal 1 sampai 3 Juz. Tahsin/tahfidz merupakan program unggulan SDIT Madani yang menjadi pedoman dasar pembelajaran di sekolah agar semua siswa dekat dengan Al-Qu'an.`,
    link: "keunggulan.html",
  },
  {
    title: "Mabit",
    image: course2,
    desc: `Pada agenda Mabit ini Peserta didik akan dibekali dengan bimbingan ruhiyah, Para siswa akandibimbing untuk belajar dan membiasakan diri melaksanakan Shalat Tahajjud, Dhuha, Berdzikir pagi-petang serta Tilawah Al-Quran.`,
    link: "keunggulan.html",
  },
  {
    title: "Market Day",
    image: course3,
    desc: `Market day merupakan program dimana satu hari dikhususkan bagi para siswa/siswi untuk berjualan dagangan mereka sendiri. Harapannya para siswa/siswi SDIT Madani bisa belajar berbisnis dan muamalah sejak dini.`,
    link: "keunggulan.html",
  },
  {
    title: "SuperCamp",
    image: course5,
    desc: `Madani SuperCamp adalah nama dari Program Camping di SDIT Madani. SuperCamp bertujuan untuk melatih mental dan fisik para siswa/siswi SDIT Madani dan tak lupa dibarengi dengan games yang menambah softskill bagi para siswa. selain itu, di Madani SuperCamp ini Siswa/Siswi dibekali dengan Program peningkatan Ruhiyah.`,
    link: "keunggulan.html",
  },
  {
    title: "Outing Class",
    image: course4,
    desc: `Para pendidik di SDIT Madani juga tak lupa untuk memberikan refreshing bagi para muridnya, OutingClass juga merupakan salah satu program unggulan selain jalan-jalan para murid juga dibarengi dengan pengetahuan tambahan selama menajalani OutingClass.`,
    link: "keunggulan.html",
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

// Komponen card dengan animasi morph-in per card
function CardMorph({ image, title, desc, inView, delay = 0 }) {
  const style = {
    animationDelay: inView ? `${delay}s` : undefined,
    opacity: inView ? 1 : 0,
    minHeight: 520,
    maxWidth: 520,
    margin: "0 auto",
  };
  return (
    <div
      className={`program-card-morph bg-white rounded-[3rem] p-12 flex flex-col items-center border border-[#2E7D32]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 mx-auto ${inView ? "morph-in" : ""}`}
      style={style}
    >
      <div className="relative w-full h-72 mb-10 rounded-3xl overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          style={{ borderRadius: "1.8rem" }}
        />
      </div>
      <h4 className="font-semibold text-2xl mb-4 text-center text-[#2E7D32]">{title}</h4>
      <p className="text-gray-500 text-lg text-justify">{desc}</p>
    </div>
  );
}

export default function UnggulanSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Untuk animasi morph-in seluruh slider saat masuk viewport
  const [sliderRef, sliderInView] = useInViewAnimation();

  // Agar tombol swiper selalu aktif
  const [navigationReady, setNavigationReady] = useState(false);
  useEffect(() => {
    if (prevRef.current && nextRef.current) setNavigationReady(true);
  }, [prevRef, nextRef]);

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <AnimatedText as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight text-[#2E7D32]">
            Program Unggulan Kami
          </AnimatedText>
          <AnimatedText as="p" className="text-gray-600 max-w-2xl mx-auto text-base" delay={0.18}>
            Program unggulan SDIT Madani menunjang pendidikan dan karakter siswa secara menyeluruh.
          </AnimatedText>
        </div>
        {/* Wrapper untuk posisi tombol di samping slider */}
        <div className="relative" ref={sliderRef}>
          {/* Tombol prev */}
          <button
            ref={prevRef}
            className="custom-swiper-nav absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-full w-16 h-16 flex items-center justify-center text-4xl transition-all duration-200 shadow"
            aria-label="Sebelumnya"
            style={{ marginLeft: '-2.5rem' }}
          >
            &#8592;
          </button>
          {/* Swiper */}
          {navigationReady && (
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={48}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 24 },
                900: { slidesPerView: 2, spaceBetween: 32 },
                1280: { slidesPerView: 3, spaceBetween: 48 },
              }}
              style={{ paddingBottom: "3.5rem" }}
            >
              {unggulanPrograms.map((item, idx) => (
                <SwiperSlide key={item.title}>
                  <CardMorph
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    inView={sliderInView}
                    delay={idx * 0.12}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {/* Tombol next */}
          <button
            ref={nextRef}
            className="custom-swiper-nav absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-full w-16 h-16 flex items-center justify-center text-4xl transition-all duration-200 shadow"
            aria-label="Selanjutnya"
            style={{ marginRight: '-2.5rem' }}
          >
            &#8594;
          </button>
        </div>
      </div>
      <style>{`
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
            border-radius: 3rem;
          }
        }
        .custom-swiper-nav:active {
          transform: scale(0.95);
        }
        @media (max-width: 1023px) {
          .program-card-morph {
            padding: 1.5rem !important;
            border-radius: 1.5rem !important;
            min-height: 340px !important;
            max-width: 98vw !important;
          }
          .custom-swiper-nav {
            width: 2.8rem !important;
            height: 2.8rem !important;
            font-size: 1.6rem !important;
            margin-left: -1.1rem !important;
            margin-right: -1.1rem !important;
          }
        }
        @media (max-width: 767px) {
          .program-card-morph {
            padding: 1.1rem !important;
            border-radius: 1.1rem !important;
            min-height: 320px !important;
            max-width: 98vw !important;
          }
          .custom-swiper-nav {
            width: 2.2rem !important;
            height: 2.2rem !important;
            font-size: 1.2rem !important;
            margin-left: -0.6rem !important;
            margin-right: -0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
