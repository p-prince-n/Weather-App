import React from 'react'
import { WEATHER_IMG_LIST } from '../utils/Constant';
import { ThermometerSnowflake, ThermometerSun } from "lucide-react";

const HourlyForecastCrad = ({hourlyData}) => {
     const weatherImg = (weather) => {
    const imgPathObj = WEATHER_IMG_LIST.filter(
      (item) => item.key.toLowerCase() === weather.toLowerCase()
    );
    const imgPath = imgPathObj[0].icon;

    return imgPath;
  };
  return (
    <div className="px-5  py-5 flex items-center border rounded-xl shadow-2xl bg-black/20 border-gray-900   flex-col justify-center w-60  ">
        <h1 className="font-semibold text-xl lg:text-2xl">
          {new Date(hourlyData?.dt * 1000).toDateString()}
        </h1>
        <h1 className="font-bold text-xl lg:text-xl">
          {new Date(hourlyData?.dt * 1000).toLocaleTimeString()}
        </h1>

        <img
          src={weatherImg(hourlyData?.weather[0]?.main)}
          className="size-15 md:size-20 xl:size-25 "
          alt={hourlyData?.weather[0]?.main}
        />

        <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold py-1">
          {hourlyData?.main?.temp}°𝐶
        </h1>
        <div className="flex mt-1 items-center gap-2 md:gap-5 justify-center">
          <div className=" flex gap-2 items-center">
            <ThermometerSnowflake size={20} />
            <div className="flex flex-col gap-0.1">
              <div className="text-xs">Min Temp</div>
              <div className="text-xs font-semibold">
                {hourlyData?.main?.temp_min}°𝐶
              </div>
            </div>
          </div>

          <div className=" flex gap-2 items-center">
            <ThermometerSun size={20} />
            <div className="flex flex-col gap-0.1">
              <div className="text-xs">Max Temp</div>
              <div className="text-xs font-semibold">
                {hourlyData?.main?.temp_max}°𝐶
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 my-2 text-sm md:text-sm">
          <div>feels like : </div>
          <p className="font-semibold">{hourlyData?.main?.feels_like}°𝐶</p>
        </div>
      </div>
  )
}

export default HourlyForecastCrad