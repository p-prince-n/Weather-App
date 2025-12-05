import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { WEATHER_IMG_LIST } from "../utils/Constant";

const ForecasteNextdays = () => {
  const { forecast } = useContext(WeatherContext);

  const filteredData =
    forecast?.list?.filter(item => item.dt_txt.includes("12:00:00")) || [];

  const getIcon = (main) => {
    const obj = WEATHER_IMG_LIST.find(a => a.key === main);
    return obj ? <img src={obj.icon} alt={main} className="w-[28px] h-[28px]" /> 
               : <img src={WEATHER_IMG_LIST[0].icon} className="w-[28px] h-[28px]" />;
  };

  return (
    <div className="backdrop-blur-2xl bg-white/15 border rounded-xl border-gray-400 shadow-xl 
                    p-4 pt-2 md:p-6 w-full lg:w-100 text-white flex flex-col">
      
      <h2 className="self-center text-2xl font-bold mb-4 tracking-wide">Daily Forecast</h2>

      <div className="flex justify-between items-center border-b pb-2 font-semibold 
                      text-xs sm:text-sm md:text-base sticky top-0 bg-inherit z-10">
        <p className="w-1/4 text-center">Image</p>
        <p className="w-1/4 text-center">Temp</p>
        <p className="w-1/2 text-center">Day / Date</p>
      </div>

      <div className="overflow-y-scroll scrollbar-hide mt-2 flex-1 max-h-[270px] sm:max-h-[290px] md:max-h-[300px]">

        {filteredData.length > 0 ? filteredData.map((item, i) => {
          const date = new Date(item.dt_txt);
          const day = date.toLocaleDateString("en-US", { weekday: "short" });
          const dayNum = date.getDate();
          const month = date.toLocaleDateString("en-US", { month: "short" });
        const year = date.toLocaleDateString("en-US", { year: "numeric" });  
          const temp = item.main.temp.toFixed(2);;

          return (
            <div key={i}
              className="flex justify-between items-center py-2 md:py-3 hover:bg-white/10
                         rounded-lg cursor-pointer transition-all active:scale-[.98] select-none">
              
              <div className="w-1/4 flex justify-center">{getIcon(item.weather[0].main)}</div>
              <p className="w-1/4 text-center text-sm md:text-base">{temp}°C</p>
              <p className="w-1/2 text-center text-sm md:text-base">{`${day} , ${dayNum} ${month} ${year}`}</p>
            </div>
          );
        }) : <p className="text-center p-4 opacity-70">No forecast data available.</p>}
        
      </div>
    </div>
  );
};

export default ForecasteNextdays;
