import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WeatherProvider } from "./context/WeatherContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </WeatherProvider>
  </StrictMode>
);
