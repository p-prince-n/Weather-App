import { createContext, useEffect, useState } from 'react'


export const ThemeContext=createContext()
export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode") === "true";
    setDarkMode(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  return (
    <ThemeContext.Provider value={{darkMode, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}


