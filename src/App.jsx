import React, { useContext, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import Header from "./Components/Header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [loadingLocation, setLoadingLocation] = useState(false);
  const { city, forecast, getForecast, forecastLoading } = useContext(WeatherContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-screen ${darkMode ? "dark-bg-gradient" : "light-bg-gradient"} flex flex-col`}>
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
              <h2 className="text-xl font-bold">{forecast.city.name}, {forecast.city.country}</h2>
              <p>Population: {forecast.city.population}</p>
              <p>Timezone: {forecast.city.timezone}</p>
              {/* Map forecast.list here for weather details */}
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
