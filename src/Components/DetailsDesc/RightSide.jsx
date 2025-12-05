import { Droplets, Wind } from "lucide-react";
import { IoMdSpeedometer } from "react-icons/io";
import { FaCircleRadiation } from "react-icons/fa6";
import { useContext } from "react";
import { WeatherCurrentContext } from "../../context/WeatherCurrentContext";

import { Eye, Binoculars, CloudFog } from "lucide-react";

const VisibilityIcon = ({ visibility }) => {
  if (visibility > 8000) return <Binoculars size={24} />;
  if (visibility > 4000) return <Eye size={24} />;
  return <CloudFog size={24} />;
};

const RightSide = () => {
  const { currentWeather } = useContext(WeatherCurrentContext);
  const weatherMain = currentWeather?.main;
  return (
    <div className="flex w-[280px] md:w-[380px] h-[260px] flex-col items-center justify-center border rounded-xl shadow-2xl bg-black/20 border-gray-900 p-5">
      <div className="grid grid-cols-2 grid-rows-2 place-content-center place-items-center gap-x-5 gap-y-16 px-7 lg:px-0">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="flex items-center justify-center">
            <Droplets className="size-8" />
          </div>
          <div className="flex flex-col items-center justify-center text-xs md:text-sm lg:te-lg">
            <div>Humidity</div>
            <div>{weatherMain?.humidity}%</div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <Wind className="size-8" />
          </div>
          <div className="flex flex-col items-center justify-center text-xs md:text-sm lg:te-lg">
            <div>Wind Speed</div>
            <div>{currentWeather?.wind?.speed} m/s</div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <IoMdSpeedometer className="size-8" />
          </div>
          <div className="flex flex-col items-center justify-center text-xs md:text-sm lg:te-lg">
            <div>Pressure</div>
            <div>{weatherMain?.pressure} hPa</div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <VisibilityIcon visibility={currentWeather?.visibility} />
          </div>
          <div className="flex flex-col items-center justify-center text-xs md:text-sm lg:te-lg">
            <div>Visibility</div>
            <div>
              <p>{(currentWeather?.visibility / 1000).toFixed(1)} km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
