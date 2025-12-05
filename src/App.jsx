import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import Header from "./Components/Header";
import { ThemeContext } from "./context/ThemeContext";
import CurrentweatherCard from "./Components/CurrentweatherCard";
import DetailsDescPage from "./Components/DetailsDescPage";
import ForecasteNextdays from "./Components/ForecasteNextdays";
import HourlyForecast from "./Components/HourlyForecast";
import LoaderIcon from "./Components/LoaderIcon";
import { WeatherCurrentContext } from "./context/WeatherCurrentContext";

function App() {
  const [loadingLocation, setLoadingLocation] = useState(false);
  const { forecast, forecastLoading, getForecastByCoords } =
    useContext(WeatherContext);
    const { getWeatherByCoords } = useContext(WeatherCurrentContext);
  const { darkMode } = useContext(ThemeContext);
 

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;

        getWeatherByCoords(latitude, longitude).then(city => {
          getForecastByCoords(latitude, longitude);
        });
      },
      error => console.log("Location blocked  ", error)
    );
  }, []);


  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark-bg-gradient" : "light-bg-gradient"
      } flex flex-col`}
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Header
          loadingLocation={loadingLocation}
          setLoadingLocation={setLoadingLocation}
        />
      </div>

    
      <div className="mt-4 p-4 text-white">
        {loadingLocation ? (
          <div className="flex items-center justify-center mt-6 text-white text-lg">
            <LoaderIcon />
          </div>
        ) : (
          <>
            {forecastLoading && <div className="flex items-center justify-center mt-6 text-white text-lg" > <LoaderIcon /></div>}

            {!forecastLoading &&
              (forecast ? (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col lg:flex-row px-3 md:px-6 xl:px-10 2xl:px-30 gap-5 xl:gap-10">
                    <CurrentweatherCard />
                    <DetailsDescPage />
                  </div>
                  <div className="flex flex-col lg:flex-row px-3 md:px-6 xl:px-10 2xl:px-30 gap-5 xl:gap-10">
                    <ForecasteNextdays />
                    <HourlyForecast/>
                  </div>
                </div>
              ) : (
                <p>
                  Search a city or click the location icon to get current city
                  forecast.
                </p>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
