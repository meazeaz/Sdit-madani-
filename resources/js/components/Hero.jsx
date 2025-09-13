import React, { useEffect, useState } from "react";
import profileImg from "../assets/poto.png";
import bgImage from "../assets/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";


export default function Hero() {
  const typingText = "Membentuk Generasi Unggul, Rabbani, Berwawasan Global";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prestasi, setPrestasi] = useState(1); // mulai dari 1


  useEffect(() => {
    if (prestasi < 128) {
      const interval = setInterval(() => {
        setPrestasi((prev) => {
          if (prev < 128) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 15);
      return () => clearInterval(interval);
    }
  }, [prestasi]);

  useEffect(() => {
    let timeout;
    if (currentIndex < typingText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(typingText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, typingText]);

  return (
    <section className="relative h-auto md:h-[95vh] px-4 md:px-16 py-12 md:py-24 overflow-hidden bg-[#f7f7f7]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Decorative SVG Elements - Left Side */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Star - Rotating */}
        <svg
          className="absolute left-1/2 top-[8%] w-10 md:w-14 h-10 md:h-14 animate-spin-slow"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#1A2B3B"
          strokeWidth="2"
        >
          <polygon points="24,2 29,18 46,18 32,28 38,44 24,34 10,44 16,28 2,18 19,18" />
        </svg>
        {/* Diamond - Moving Left-Right */}
        <svg
          className="absolute left-[18%] top-[30%] w-8 md:w-10 h-8 md:h-10 animate-move-x"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#25443B"
          strokeWidth="2"
        >
          <polygon points="24,4 44,24 24,44 4,24" />
        </svg>
        {/* Asterisk - Morphing Scale */}
        <svg
          className="absolute left-[45%] top-[75%] w-10 md:w-12 h-10 md:h-12 animate-scale-pulse"
          viewBox="0 0 48 48 96 96"
          fill="none"
          stroke="#25443B"
          strokeWidth="2"
        >
          <polygon points="24,6 28,20 42,24 28,28 24,42 20,28 6,24 20,20" />
        </svg>
        {/* Circle Rays - Spinning Fast */}
        <svg
          className="absolute left-[80%] top-[48%] w-8 md:w-10 h-8 md:h-10 animate-spin-fast"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#25443B"
          strokeWidth="2"
        >
          <g>
            <circle cx="24" cy="24" r="4" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="24"
                y1="4"
                x2="24"
                y2="12"
                transform={`rotate(${i * 30} 24 24)`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Decorative SVG Elements - Right Side */}
      <div className="absolute right-0 top-0 pointer-events-none z-0 w-1/2 h-full hidden md:block">
        {/* Floating circles */}
        <div className="absolute right-[15%] top-[20%] w-8 h-8 rounded-full bg-[#E9FF3C] opacity-30 animate-float-y"></div>
        <div className="absolute right-[25%] top-[30%] w-6 h-6 rounded-full bg-[#FFA673] opacity-40 animate-float-y-delay"></div>
        
        {/* Abstract shape 1 - Bouncing */}
        <svg
          className="absolute right-[10%] top-[15%] w-12 h-12 animate-bounce-slow"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#1A2B3B"
          strokeWidth="1.5"
        >
          <path d="M24 4C12 4 4 12 4 24s8 20 20 20 20-8 20-20S36 4 24 4z" />
          <path d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" />
        </svg>
        
        {/* Abstract shape 2 - Rotating */}
        <svg
          className="absolute right-[20%] top-[70%] w-16 h-16 animate-rotate-3d"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#25443B"
          strokeWidth="1.5"
        >
          <path d="M24 4l16 16-16 16L8 20 24 4z" />
          <path d="M24 44L8 28l16-16 16 16-16 16z" />
        </svg>
        
        {/* Dotted line - Moving */}
        <svg
          className="absolute right-[5%] top-[50%] w-24 h-2 animate-move-right-left"
          viewBox="0 0 100 10"
        >
          <circle cx="10" cy="5" r="2" fill="#1A2B3B" opacity="0.6" />
          <circle cx="30" cy="5" r="2" fill="#1A2B3B" opacity="0.6" />
          <circle cx="50" cy="5" r="2" fill="#1A2B3B" opacity="0.6" />
          <circle cx="70" cy="5" r="2" fill="#1A2B3B" opacity="0.6" />
          <circle cx="90" cy="5" r="2" fill="#1A2B3B" opacity="0.6" />
        </svg>
        
        {/* Triangle group - Pulsing */}
        <div className="absolute right-[8%] top-[80%] animate-pulse-opacity">
          <svg
            className="w-10 h-10"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#FFA673"
            strokeWidth="1.5"
          >
            <polygon points="24,4 44,44 4,44" />
          </svg>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full">
        {/* Left: Text content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-8 py-6 md:py-12 fade-in-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A2B3B] leading-tight">
            SDIT MADANI <br  className="hidden md:block" />
            Parung Panjang<br className="hidden md:block" />
            <div className="h-6 md:h-10" /> {/* Spacer */}
            <span className="text-gray-500 font-bold inline-block text-2xl md:text-5xl lg:text-5xl tracking-wider mt-4 md:mt-8 relative md:top-[-1rem]">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-700 max-w-md md:max-w-lg fade-in-slide-up text-justify">
            Jadilah bagian dari SDIT Madani, tempat anak-anak tumbuh menjadi Sholih, Cerdas, Mandiri, dan berakhlaq mulia. Kami hadir untuk membentuk generasi yang mampu 
            membaca dan menghafal Al-Qur'an dengan baik serta meraih prestasi.</p>
            
            <p className="text-sm sm:text-base md:text-xl text-gray-700 max-w-md md:max-w-lg fade-in-slide-up text-justify">
              Daftarkan putra-putri Anda di Penerimaan Peserta Didik Baru SDIT Madani, Full Day School di Parungpanjang, Bogor, untuk Tahun Pelajaran 2026/2027!</p>
          

            <div className="flex flex-row gap-6">
              <button className="bg-[#E9FF3C] hover:bg-[#d9ef2a] transition-all duration-300 border-2 border-black text-[#1A2B3B] px-6 py-3 rounded-full font-bold text-sm button-scale-hover">
                Hubungi Kami
              </button>
              <button className="bg-[#E9FF3C] hover:bg-[#d9ef2a] transition-all duration-300 border-2 border-black text-[#1A2B3B] px-6 py-3 rounded-full font-bold text-sm button-scale-hover">
                Daftar Sekarang
              </button>
            </div>

        </div>


        {/* Right: Image with circular background */}
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-full flex items-end justify-center mb-8 md:mb-0">
          {/* Glowing circular background */}
          <div className="absolute right-0 bottom-0 w-[40vh] h-[40vh] md:w-[70vh] md:h-[70vh] bg-[#FFA673] rounded-full opacity-60 transform translate-x-1/4 translate-y-[1vh] filter blur-[80px] md:blur-[100px] md:mr-40"></div>

          {/* Enlarged photo container with morph-in animation */}
          <div
            className="relative z-20 w-[60vw] max-w-[300px] sm:max-w-[400px] md:max-w-[600px] h-[30vh] sm:h-[40vh] md:h-[85vh] rounded-full mb-0 md:mb-[-100px] morph-in"
            style={{ borderRadius: "50%" }}
          >
            <img
              src={profileImg}
              alt="Business Strategy"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Trophy badge - Prestasi */}
            <div className="absolute left-[10%] sm:left-[15%] top-[85%] md:left-[75%] md:top-[35%] lg:left-[70%] lg:top-[25%] transform -translate-y-1/2 bg-yellow-100 border-4 border-[#FFA673] rounded-full p-4 sm:p-5 md:p-6 z-30 fade-in-slide-up shadow-lg">
              {/* Perhatikan p-4 sm:p-5 md:p-6 dan w-16 h-16, sm:w-20 sm:h-20, md:w-24 md:h-24 */}
              <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                {/* Perhatikan w-10 h-10, sm:w-12 sm:h-12, md:w-14 md:h-14 */}
                <FontAwesomeIcon icon={faTrophy} className="text-[#FFA673] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-1" />
                <div className="flex items-end">
                  {/* Perhatikan text-xl, sm:text-2xl, md:text-3xl */}
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#B12C00]">{prestasi}+</span>
                </div>
                {/* Perhatikan ukuran text mungkin也需要 disesuaikan, misalnya text-xs */}
                <span className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 font-bold">Prestasi</span>
              </div>
            </div>


          {/* Rating badge - Mobile positioning */}
          <div className="absolute right-[10%] sm:right-[15%] top-[85%] md:right-[75%] md:top-[90%] lg:right-[80%] lg:top-[95%] transform -translate-y-1/2 bg-white border-4 border-[#E9FF3C] rounded-full p-3 sm:p-4 md:p-5 z-30 fade-in-slide-up">
            <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-600 font-bold">Akreditasi</span>
              <div className="flex items-center mt-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">A</span>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div className="absolute top-12 left-12 md:top-20 md:left-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-20 animated-decorative">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="#1A2B3B"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M24 0v48M0 24h48M9.4 9.4l29.2 29.2M9.4 38.6l29.2-29.2" />
        </svg>
      </div>

      {/* Animations & Custom Styles */}
      <style>{`
        .animated-decorative {
          animation: fadeInSlideDown 1.5s ease forwards, rotateSlow 10s linear infinite;
        }
        @keyframes fadeInSlideDown {
          0% { opacity: 0; transform: translateY(-20px);}
          50% { opacity: 10; transform: translateY(0);}
          100% { opacity: 20; transform: translateY(0);}
        }
        @keyframes rotateSlow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .blinking-cursor {
          font-weight: 700;
          color: #888888;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { opacity: 0; }
        }
        @keyframes morphInFromSide {
          0% {
            transform: translateX(100%) scale(0.8) rotate(10deg);
            opacity: 0;
            border-radius: 50%;
          }
          50% {
            transform: translateX(20%) scale(1.1) rotate(-5deg);
            opacity: 0.7;
            border-radius: 40%;
          }
          100% {
            transform: translateX(0) scale(1) rotate(0deg);
            opacity: 1;
            border-radius: 50%;
          }
        }
        .morph-in { animation: morphInFromSide 1.2s ease forwards; }
        @keyframes fadeInSlideUp {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .fade-in-slide-up { animation: fadeInSlideUp 1s ease forwards; }
        .button-scale-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-spin-fast {
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg);}
        }
        .animate-move-x {
          animation: moveX 3.5s ease-in-out infinite alternate;
        }
        @keyframes moveX {
          0% { transform: translateX(0);}
          100% { transform: translateX(60px);}
        }
        .animate-scale-pulse {
          animation: scalePulse 2.2s ease-in-out infinite alternate;
        }
        @keyframes scalePulse {
          0% { transform: scale(1);}
          100% { transform: scale(1.25);}
        }
        .animate-float-y {
          animation: floatY 4s ease-in-out infinite;
        }
        .animate-float-y-delay {
          animation: floatY 5s ease-in-out 0.5s infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 6s ease infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-rotate-3d {
          animation: rotate3d 8s linear infinite;
        }
        @keyframes rotate3d {
          0% { transform: rotateY(0) rotateX(0); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        .animate-move-right-left {
          animation: moveRightLeft 5s linear infinite alternate;
        }
        @keyframes moveRightLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(30px); }
        }
        .animate-pulse-opacity {
          animation: pulseOpacity 3s ease infinite;
        }
        @keyframes pulseOpacity {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        /* MOBILE RESPONSIVE ONLY (max-width: 767px) */
        @media (max-width: 767px) {
          /* Container utama agar tidak bertumpuk */
          .max-w-7xl.mx-auto.flex.flex-col-reverse.md\:flex-row.items-center.justify-between.h-full {
            flex-direction: column !important;
            align-items: stretch !important;
            justify-content: flex-start !important;
            gap: 2rem;
            height: auto !important;
          }
          /* Konten kiri (teks) */
          .w-full.md\:w-1\/2.space-y-4.md\:space-y-8.py-6.md\:py-12.fade-in-slide-up {
            padding-top: 1.5rem !important;
            padding-bottom: 0 !important;
            text-align: center !important;
          }
          /* Tombol agar tidak terlalu besar dan bertumpuk */
          .button-scale-hover {
            width: 100% !important;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
            display: block;
          }
          /* Gambar profil agar proporsional */
          .relative.w-full.md\:w-1\/2.h-\[40vh\].md\:h-full.flex.items-end.justify-center.mb-8.md\:mb-0 {
            height: auto !important;
            margin-bottom: 1.5rem !important;
            justify-content: center !important;
            align-items: flex-end !important;
          }
          .relative.z-20.w-\[60vw\].max-w-\[300px\].sm\:max-w-\[400px\].md\:max-w-\[600px\].h-\[30vh\].sm\:h-\[40vh\].md\:h-\[85vh\].rounded-full.mb-0.md\:mb-\[-100px\].morph-in {
            width: 80vw !important;
            max-width: 260px !important;
            height: 36vw !important;
            min-height: 180px !important;
            margin-bottom: 0 !important;
          }
          /* Badge akreditasi agar tidak menutupi gambar */
          .absolute.right-\[10\%\].sm\:right-\[15\%\].top-\[85\%\].md\:right-\[75\%\].md\:top-\[90\%\].lg\:right-\[80\%\].lg\:top-\[95\%\].transform.-translate-y-1\/2.bg-white.border-4.border-\[\#E9FF3C\].rounded-full.p-2.sm\:p-3.md\:p-4.z-30.fade-in-slide-up {
            right: 50% !important;
            left: 50% !important;
            top: 100% !important;
            transform: translate(-50%, 0) !important;
            margin-top: 0.5rem !important;
          }
          /* Sembunyikan dekorasi SVG kanan */
          .absolute.right-0.top-0.pointer-events-none.z-0.w-1\/2.h-full.hidden.md\:block {
            display: none !important;
          }
          /* Dekorasi kiri agar tidak menutupi konten */
          .absolute.inset-0.pointer-events-none.z-0 > svg,
          .absolute.inset-0.pointer-events-none.z-0 > div {
            opacity: 0.3 !important;
            width: 40px !important;
            height: 40px !important;
          }
          /* Background pattern agar tidak mengganggu */
          .absolute.inset-0.bg-cover.bg-center {
            opacity: 0.15 !important;
            background-size: cover !important;
            background-position: center !important;
          }
        }
      `}</style>
    </section>
  );
}
