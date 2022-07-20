import React from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const Theme = React.createContext(themes.light);

const ThemeContext: React.FC<any> = ({ children }) => {
  return <Theme.Provider value={themes.light}>{children}</Theme.Provider>;
};

export default ThemeContext;
