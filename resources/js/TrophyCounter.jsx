import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

function TrophyCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 128;
    if (count < end) {
      const interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(interval);
      }, 15);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="absolute left-[10%] sm:left-[15%] top-[85%] md:left-[75%] md:top-[90%] lg:left-[80%] lg:top-[95%] transform -translate-y-1/2 bg-white border-4 border-[#FFA673] rounded-full p-2 sm:p-3 md:p-4 z-30 fade-in-slide-up shadow-lg">
      <div className="flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
        <FontAwesomeIcon icon={faTrophy} className="text-[#FFA673] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-1" />
        <div className="flex items-end">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFA673]">{count}</span>
          <span className="text-[#FFA673] text-base sm:text-lg md:text-xl font-bold ml-1">+</span>
        </div>
        <span className="text-[8px] sm:text-[9px] md:text-xs text-gray-600 mt-1">Prestasi</span>
      </div>
    </div>
  );
}

export default TrophyCounter;
