import React, { useContext } from "react";
import { WeatherCurrentContext } from "../../context/WeatherCurrentContext";
import { WEATHER_IMG_LIST } from "../../utils/Constant";

const Middle = () => {
  const { currentWeather } = useContext(WeatherCurrentContext);

  const weatherMain = currentWeather?.weather?.[0]?.main;
  const weatherObject = WEATHER_IMG_LIST.find(
    (item) => item.key === weatherMain
  );
  const imgPath = weatherObject?.icon;
  return (
    <div className="flex w-[280px] md:w-[380px] h-[260px]  flex-col items-center justify-center gap-1 border rounded-xl shadow-2xl bg-black/20 border-gray-900 px-15 py-5 md:px-5 md:py-0">
      <img
        src={imgPath}
        className="size-35 md:size-45 lg:size-55 "
        alt={weatherObject?.label}
      />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold ">
        {weatherObject?.label}
      </h2>
    </div>
  );
};

export default Middle;
