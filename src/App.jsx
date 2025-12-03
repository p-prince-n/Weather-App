import React, { useContext, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import Header from "./Components/Header";
import { ThemeContext } from "./context/ThemeContext";
import CurrentweatherCard from "./Components/CurrentweatherCard";
import { WeatherCurrentContext } from "./context/WeatherCurrentContext";

function App() {
  const [loadingLocation, setLoadingLocation] = useState(false);
  const { city, forecast, getForecast, forecastLoading } = useContext(WeatherContext);
  const { darkMode } = useContext(ThemeContext);
  const currentTempDet=forecast && forecast.list[0];
  const {currentWeather}=useContext(WeatherCurrentContext)
  

  return (
    <div className={`min-h-screen ${darkMode ? "dark-bg-gradient" : "light-bg-gradient"} flex flex-col`}>
      <Header loadingLocation={loadingLocation} setLoadingLocation={setLoadingLocation} />
      {loadingLocation ? (
        <div className="flex items-center justify-center mt-10 text-white text-lg">
          Loading current city...
        </div>
      ) : (
        <div className="p-4 text-white">
          {forecastLoading && <div>Forecast Loading...</div>}
          {!forecastLoading && (forecast ? (
            <div>
              <CurrentweatherCard currentWeather={currentWeather} />
            </div>
          ) : (
            <p>Search a city or click the location icon to get current city forecast.</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
