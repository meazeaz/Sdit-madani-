import React, { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Bapak Ahmad Rizki",
    text:
      "Sekolah ini memberikan pendidikan yang seimbang antara akademik dan karakter. Anak saya menjadi lebih disiplin dan bertanggung jawab sejak bersekolah di sini.",
  },
  {
    name: "Ibu Siti Rahayu",
    text:
      "Fasilitas lengkap dan guru-guru yang kompeten membuat proses belajar mengajar menjadi sangat efektif. Anak saya semakin termotivasi untuk belajar.",
  },
  {
    name: "Bapak Budi Santoso",
    text:
      "Program tahfizh Al-Qur'an sangat bagus untuk pembentukan karakter anak. Prestasi akademik anak saya juga terus meningkat dari waktu ke waktu.",
  },
  {
    name: "Ibu Dian Permata",
    text:
      "Saya sangat appreciate dengan pendekatan personal yang diberikan guru kepada setiap siswa. Setiap anak mendapat perhatian sesuai kebutuhannya.",
  },
  {
    name: "Bapak Hendra Wijaya",
    text:
      "Kurikulum yang diterapkan sangat relevan dengan perkembangan zaman. Anak saya diajarkan tidak hanya teori tetapi juga praktik dalam kehidupan sehari-hari.",
  },
  {
    name: "Ibu Lina Kusuma",
    text:
      "Lingkungan sekolah yang nyaman dan kondusif sangat mendukung perkembangan anak. Nilai-nilai islami benar-benar diterapkan dalam keseharian.",
  },
  {
    name: "Bapak Rudi Hartono",
    text:
      "Komunikasi antara sekolah dan orang tua sangat baik. Kami selalu mendapatkan update perkembangan anak secara berkala melalui berbagai channel.",
  },
  {
    name: "Ibu Maya Sari",
    text:
      "Ekstrakurikuler yang beragam memungkinkan anak untuk mengembangkan bakat dan minatnya di luar pelajaran akademik. Sangat lengkap!",
  },
  {
    name: "Bapak Agus Setiawan",
    text:
      "Saya merekomendasikan sekolah ini kepada semua orang tua yang menginginkan pendidikan terbaik untuk anak-anak mereka. Kualitasnya tidak diragukan lagi.",
  },
  {
    name: "Ibu Fitri Handayani",
    text:
      "Metode pembelajaran yang kreatif dan inovatif membuat anak tidak mudah bosan. Mereka selalu antusias berangkat sekolah setiap hari.",
  }
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

// Judul dengan animasi slide-up
function AnimatedTitle({ children, delay = 0 }) {
  const [ref, inView] = useInViewAnimation();
  return (
    <h4
      ref={ref}
      className={`text-center font-bold text-2xl md:text-3xl mb-12 text-[#2E7D32] animated-title ${
        inView ? "slide-up" : ""
      }`}
      style={{
        animationDelay: inView ? `${delay}s` : undefined,
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </h4>
  );
}

// Card testimonial dengan animasi slide-up
function TestimonialCard({ name, text, delay = 0 }) {
  const [ref, inView] = useInViewAnimation();
  return (
    <div
      ref={ref}
      className={`testimonial-card bg-white rounded-2xl border border-[#2E7D32]/20 shadow p-8 flex flex-col items-center w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:border-[#2E7D32] hover:-translate-y-2 ${
        inView ? "slide-up" : ""
      }`}
      style={{
        animationDelay: inView ? `${delay}s` : undefined,
        opacity: inView ? 1 : 0,
      }}
    >
      <h5 className="font-bold text-[#2E7D32] text-lg mb-2">{name}</h5>
      <p className="text-[#1B5E20] text-base text-center">{text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-[#F6FAF7]">
      <AnimatedTitle delay={0.05}>Apa Kata Wali Murid?</AnimatedTitle>
      <div className="flex justify-center gap-8 flex-wrap">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            name={testimonial.name}
            text={testimonial.text}
            delay={0.15 + idx * 0.15}
          />
        ))}
      </div>
      <style jsx>{`
        .animated-title {
          opacity: 0;
          transform: translateY(40px);
        }
        .animated-title.slide-up {
          animation: slideUpAppear 0.8s cubic-bezier(.39,.575,.565,1) both;
        }
        .testimonial-card {
          opacity: 0;
          transform: translateY(40px);
        }
        .testimonial-card.slide-up {
          animation: slideUpAppear 0.8s cubic-bezier(.39,.575,.565,1) both;
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
      `}</style>
    </section>
  );
}
