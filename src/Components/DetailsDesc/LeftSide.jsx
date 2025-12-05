import React, { useContext } from "react";
import { WeatherCurrentContext } from "../../context/WeatherCurrentContext";
import { ThermometerSun, ThermometerSnowflake, Sunrise, Sunset } from "lucide-react";

const LeftSide = () => {
  const { currentWeather } = useContext(WeatherCurrentContext);
  
  return (
    <div className="px-5 w-[280px] md:w-[380px] h-[260px] py-5 2xl:px-15 flex items-center border rounded-xl shadow-2xl bg-black/20 border-gray-900   flex-col justify-center  ">
      <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-5 md:mb-10 xl:mb-15">
        {currentWeather?.main?.temp}°𝐶
      </h1>
      <div className="flex items-center gap-5 md:gap-15  justify-center">
        <div className=" flex gap-2 items-center">
          <ThermometerSnowflake size={28} />
          <div className="flex flex-col gap-0.1">
            <div className="text-xs">Min Temp</div>
            <div className="font-bold">{currentWeather?.main?.temp_min}°𝐶</div>
          </div>
        </div>
       
        <div className=" flex gap-2 items-center">
          <ThermometerSun size={28} />
          <div className="flex flex-col gap-0.1">
            <div className="text-xs">Max Temp</div>
            <div className="font-bold">{currentWeather?.main?.temp_max}°𝐶</div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 my-2 text-sm md:text-sm">
        <div>feels like : </div>
        <p className="font-bold" >{currentWeather?.main?.feels_like}°𝐶</p>
      </div>
      <div className="flex  items-center justify-center  gap-10">
        <div className="flex items-center justify-center gap-2 ">
          <Sunrise size={25} />
          <div className="flex flex-col text-xs md:text-sm">
            <p>Sunrise</p>
            <p className="font-semibold">{new Date(currentWeather?.sunrise * 1000).toLocaleTimeString()}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <Sunset size={25} />
          <div className="flex flex-col text-xs md:text-sm">
            <p>Sunset</p>
            <p className="font-semibold">{new Date(currentWeather?.sunset * 1000).toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
