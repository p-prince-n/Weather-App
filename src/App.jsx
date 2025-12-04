import React, { useContext, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import Header from "./Components/Header";
import { ThemeContext } from "./context/ThemeContext";
import CurrentweatherCard from "./Components/CurrentweatherCard";
import DetailsDescPage from "./Components/DetailsDescPage";

function App() {
  const [loadingLocation, setLoadingLocation] = useState(false);
  const { city, forecast, getForecast, forecastLoading } =
    useContext(WeatherContext);
  const { darkMode } = useContext(ThemeContext);
  const currentTempDet = forecast && forecast.list[0];

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

      {/* Gap so content doesn't hide behind header */}
      <div className="mt-4 p-4 text-white">
        {loadingLocation ? (
          <div className="flex items-center justify-center mt-6 text-white text-lg">
            Loading current city...
          </div>
        ) : (
          <>
            {forecastLoading && <div>Forecast Loading...</div>}

            {!forecastLoading &&
              (forecast ? (
                <div className="flex flex-col md:flex-row px-3 md:px-6 xl:px-10 2xl:px-30 gap-5 xl:gap-10">
                  <CurrentweatherCard />
                  <DetailsDescPage />
                </div>
              ) : (
                <p>Search a city or click the location icon to get current city forecast.</p>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
