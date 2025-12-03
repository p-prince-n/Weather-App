import { useState, useEffect, useContext } from "react";
import { Sun, Moon, MapPin } from "lucide-react";
import logo from "../assets/cloudy.png";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

const Header = ({ loadingLocation, setLoadingLocation }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { setCity, getForecast, city: contextCity } = useContext(WeatherContext);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500); // wait 500ms after last keystroke
    return () => clearTimeout(handler);
  }, [search]);

  // Automatically submit when user stops typing
  useEffect(() => {
    if (debouncedSearch.trim()) {
      handleSearchSubmit(debouncedSearch.trim());
    }
  }, [debouncedSearch]);

  const handleSearchSubmit = async (cityName) => {
    setCity(cityName);        // update context
    await getForecast(cityName); // fetch forecast for this city
  };

  // Fetch current location
  const fetchCity = () => {
    setLoadingLocation(true);
    if (!navigator.geolocation) {
      alert("Geolocation not supported!");
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          if (res.data?.address) {
            const cityName = res.data.address.city || res.data.address.town || res.data.address.village;
            if (cityName) {
              setSearch(cityName);
              handleSearchSubmit(cityName);
            }
          }
        } catch (error) {
          console.error("Reverse geocoding failed:", error);
          alert("Unable to fetch city from your location.");
        } finally {
          setLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert(error.message || "Error fetching location.");
        setLoadingLocation(false);
      },
      { timeout: 10000 }
    );
  };

  return (
    <div className="backdrop-blur-xl w-full bg-white/10 border border-white/30 shadow-xl px-6 lg:px-12 py-2 lg:py-3">
      <div className="flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-1">
          <img src={logo} className="size-6 lg:size-10" alt="weatherIcon" />
          <h3 className="hidden md:block lg:text-xl font-bold text-white">Climato</h3>
        </a>

        <div className="backdrop-blur-md md:backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.4)] p-1 md:p-2 rounded-xl md:rounded-2xl w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] transition-all duration-300 focus-within:border-blue-400 dark:focus-within:border-yellow-300 focus-within:ring-1 focus-within:ring-blue-400 dark:focus-within:ring-yellow-300">
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            className="py-1 px-4 sm:px-5 md:px-6 bg-transparent w-full outline-none text-white dark:text-gray-200 placeholder-white/75 dark:placeholder-gray-300 text-sm sm:text-base"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={fetchCity}
            disabled={loadingLocation}
            className={`p-1 lg:p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 ${loadingLocation ? "opacity-50 cursor-not-allowed" : ""}`}
            title={contextCity ? `Current city: ${contextCity}` : "Get current city"}
          >
            <MapPin className="text-green-400 size-6 lg:size-6" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-1 lg:p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {darkMode ? (
              <Sun className="text-yellow-300 size-6 animate-spin" style={{ animationDuration: "1.4s", animationTimingFunction: "ease-in-out" }} />
            ) : (
              <Moon className="text-blue-300 size-6 animate-spin" style={{ animationDuration: "1.4s", animationTimingFunction: "ease-in-out" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
