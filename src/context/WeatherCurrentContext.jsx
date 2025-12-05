import { createContext, useState } from "react";
import axios from "axios";

export const WeatherCurrentContext = createContext();

export const WeatherCurrentProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

  const getCurrentWeather = async (city) => {
    if (!city) return;

    setWeatherLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = res.data;

      // Filtered clean model
      const weatherModel = {
        id: data.id,
        name: data.name,
        timezone: data.timezone,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        coord: data.coord,
        main: data.main, // temp, humidity, feels_like
        weather: data.weather, // description, icon
        wind: data.wind,
        visibility: data.visibility,
        clouds: data.clouds,
        dt: data.dt, // current time (unix)
      };

      setCurrentWeather(weatherModel);
    } catch (error) {
      console.error("Error fetching current weather:", error);
    } finally {
      setWeatherLoading(false);
    }
  };


  const getWeatherByCoords = async (lat, lon) => {
  setWeatherLoading(true);
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const data = res.data;

    const weatherModel = {
      id: data.id,
      name: data.name,
      country: data.sys.country,
      main: data.main,
      weather: data.weather,
      wind: data.wind,
      visibility: data.visibility,
      dt: data.dt,
    };

    setCurrentWeather(weatherModel);
    return data.name; 
  } catch (error) {
    console.error("Error fetching current location weather:", error);
  } finally {
    setWeatherLoading(false);
  }
};

  return (
    <WeatherCurrentContext.Provider
      value={{ currentWeather, getCurrentWeather, weatherLoading , getWeatherByCoords }}
    >
      {children}
    </WeatherCurrentContext.Provider>
  );
};
