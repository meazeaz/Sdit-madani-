import React, { useRef, useEffect, useState } from "react";
import feature2 from "../assets/feature2.jpg";

// Hook animasi morph-in (untuk teks/card)
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

export default function MethodSection() {
  // Animasi morph-in untuk teks/card
  const [textRef, textInView] = useInViewAnimation();
  // Animasi foto slide-in dari kanan
  const [imgRef, imgInView] = useInViewAnimation();

  return (
    <section
      className="method-section"
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #e0ffe6, #f3fff8, #fff)",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Foto besar di kanan dengan animasi slide-in dari kanan & hover */}
      <div
        ref={imgRef}
        className="photo-container"
        style={{
          flex: 1,
          maxWidth: "60%",
          height: "auto",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          className={`${imgInView ? "slide-in-from-right" : ""} photo-hover`}
          style={{
            width: "100%",
            height: "80vh",
            maxWidth: "900px",
            maxHeight: "900px",
            minHeight: "500px",
            borderRadius: "36px",
            boxShadow: "0 8px 32px 0 rgba(34,197,94,0.10)",
            overflow: "hidden",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={feature2}
            alt="Kegiatan Belajar"
            className="img-hover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "36px",
              filter: "brightness(0.98) saturate(1.05)",
              transition: "transform 0.5s cubic-bezier(.39,.575,.565,1), filter 0.4s, box-shadow 0.4s",
            }}
          />
        </div>
      </div>
      {/* Card teks di kiri, dengan animasi slide-in dari kiri & hover */}
      <div
        ref={textRef}
        className={`text-container program-card-morph ${textInView ? "slide-in-from-left" : ""}`}
        style={{
          flex: 1,
          maxWidth: "40%",
          padding: "2rem",
          background: "rgba(255,255,255,0.85)",
          borderRadius: "24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          color: "#2E7D32",
          marginRight: "2vw",
          opacity: textInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(.39,.575,.565,1)",
        }}
      >
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "1.2rem",
          color: "#2E7D32",
        }}>
          Mendidik dengan Kasih Sayang
        </h1>
        <p style={{
          color: "#374151",
          fontSize: "1.15rem",
          textAlign: "justify",
          lineHeight: 1.7,
          transition: "color 0.3s ease",
        }}>
          Rasulullah SAW adalah tauladan terbaik, dikenal sebagai sosok penuh kasih sayang pada orang di sekitarnya terutama pada anak-anak. Dalam sebuah riwayat Abdullah Bin Shaddad dikatakan bahwa, ketika Rasul sedang sholat dan bersujud, seorang anak menaiki pundak Rasul dan dibiarkan bahkan Rasul sangat lama bersujud menunggu sang anak turun dengan sendirinya.
        </p>
      </div>
      {/* Animasi & Hover CSS */}
      <style>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(150px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-from-right {
          animation: slideInFromRight 1.8s ease forwards;
        }
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-150px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-from-left {
          animation: slideInFromLeft 1.8s ease forwards;
        }
        .photo-hover:hover .img-hover {
          transform: scale(1.04);
          filter: brightness(1.04) saturate(1.15);
          box-shadow: 0 12px 40px 0 rgba(34,197,94,0.18);
        }
        .program-card-morph {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .program-card-morph:hover {
          box-shadow: 0 16px 48px 0 rgba(46,125,50,0.3);
          transform: translateY(-8px) scale(1.01);
        }
        .program-card-morph:hover p {
          color: #2E7D32;
        }
        @media (max-width: 767px) {
          .method-section {
            flex-direction: column !important;
            padding: 1rem !important;
          }
          .photo-container {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: 300px !important;
            margin-bottom: 1.5rem !important;
          }
          .text-container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 0.5rem !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
