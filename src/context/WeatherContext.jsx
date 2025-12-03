import { createContext, useState } from "react";
import axios from "axios";
import { ForecastModel } from "../models/forcastmodel";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [forecast, setForecast] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

  const getForecast = async (city) => {
    if (!city) return;

    setForecastLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = res.data;

      const dataModel = {
        ...ForecastModel,
        city: {
          id: data.city.id,
          name: data.city.name,
          country: data.city.country,
          population: data.city.population,
          timezone: data.city.timezone,
          sunrise: data.city.sunrise,
          sunset: data.city.sunset,
          coord: data.city.coord,
        },
        list: data.list.map((item) => ({
          dt: item.dt,
          dt_txt: item.dt_txt,
          main: item.main,
          weather: item.weather,
          clouds: item.clouds,
          wind: item.wind,
          visibility: item.visibility,
          pop: item.pop,
          sys: item.sys,
        })),
        cnt: data.cnt,
        cod: data.cod,
        message: data.message,
      };

      setForecast(dataModel);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    } finally {
      setForecastLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{  forecast, getForecast, forecastLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
