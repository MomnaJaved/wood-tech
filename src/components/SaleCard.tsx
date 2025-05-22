import React, { useEffect, useState } from "react";
import { calculateTimeLeft, TimeLeft } from "../utilities/timeUtils";

type SaleCardProps = {
  title: string;
  description: string;
  bgImage: string;
  targetDate: Date;
};

const SaleCard = ({
  title,
  description,
  bgImage,
  targetDate,
}: SaleCardProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="relative rounded-lg flex-1 p-4 flex flex-col justify-between text-white h-100 "
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

      <div className="relative z-10 max-w-md">
        <h2 className="text-2xl font-serif mb-4">{title}</h2>
        <p className="mb-8 font-light leading-relaxed">{description}</p>
      </div>

      <div className="relative z-10 flex items-center gap-3 mt-4 flex-wrap max-w-lg">
        <button className="bg-[#b08d57] px-4 py-2 rounded-md font-medium shadow-md hover:bg-[#b08d44] transition">
          Shop Now
        </button>

        <div className="flex items-center space-x-2 ml-4">
          {[timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs].map(
            (num, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-gray-300 text-gray-800 rounded-md px-4 py-2 w-[70px] text-center shadow-md">
                  {num}
                  <div className="text-xs mt-1 font-light">
                    {["days", "hours", "mins", "seconds"][idx]}
                  </div>
                </div>
                {idx < 3 && (
                  <div className="text-red-500 font-bold text-2xl select-none">
                    :
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
