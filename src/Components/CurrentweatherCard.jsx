import React, { useContext } from "react";
import { WeatherCurrentContext } from "../context/WeatherCurrentContext";
import { WeatherContext } from "../context/WeatherContext";
import { WEATHER_IMG_LIST } from "../utils/Constant";
import CurrentDateTime from "./CurrentDateTime";

const CurrentweatherCard = () => {
  const { currentWeather } = useContext(WeatherCurrentContext);
  const { forecast } = useContext(WeatherContext);

  const weatherMain = currentWeather?.weather?.[0]?.main;
  const weatherObject = WEATHER_IMG_LIST.find(item => item.key === weatherMain);
  const imgPath = weatherObject?.icon;

  return (
    <div className="
      backdrop-blur-2xl bg-white/15 border border-gray-500 shadow-xl rounded-xl
      px-5  py-3 lg:px-10 lg:py-4
      flex flex-col items-center justify-center text-center
      w-full lg:w-80      
      h-72 md:h-90 lg:h-72                      
    ">
      <h1 className="text-lg md:text-2xl font-bold">
        {forecast?.city?.name} , {forecast?.city?.country}
      </h1>

      {imgPath ? (
        <img src={imgPath} className="w-20 h-20 md:w-28 md:h-28 my-3" alt={weatherObject?.label} />
      ) : (
        <p className="text-sm mt-3">No icon found</p>
      )}

      <CurrentDateTime />
    </div>
  );
};

export default CurrentweatherCard;
