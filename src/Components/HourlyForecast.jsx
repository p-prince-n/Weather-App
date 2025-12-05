import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import HourlyForecastCrad from "./HourlyForecastCrad";

const HourlyForecast = () => {
  const { forecast } = useContext(WeatherContext);
  const hourlyData = forecast?.list.slice(0, 8);

  return (
    <div
      className="backdrop-blur-2xl bg-white/15 border rounded-xl border-gray-400 shadow-xl 
                 p-4 pt-2 md:p-6 text-white flex flex-col gap-4 items-center w-full lg:w-[600px] lg:max-w-[800px] xl:w-[800px] xl:max-w-[1000px] 2xl:w-[1200px]"
    >
      {/* Title - always centered */}
      <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-center">
        Hourly Forecast
      </h1>

      {/* Horizontal scroll container */}
      <div
        className="
          flex gap-4 overflow-x-auto whitespace-nowrap
          w-full max-w-[850px] px-2 pb-3 scroll-smooth snap-x
          scrollbar-hide
        "
      >
        {hourlyData &&
          hourlyData.map((data, index) => (
            <div key={index} className="snap-center shrink-0">
              <HourlyForecastCrad hourlyData={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
