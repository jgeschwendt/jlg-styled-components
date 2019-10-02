import React from "react";

const Theme = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  colors: {
    red: "red"
  }
};

const ThemeContext = React.createContext(void 0);

const ThemeProvider = ({ children, theme }) => {
  const [state, setState] = React.useState({ ...Theme, ...theme });
  return (
    <ThemeContext.Provider value={[state, setState]}>
      {children}
    </ThemeContext.Provider>
  );
};

function useThemeContext() {
  return React.useContext(ThemeContext);
}

export { Theme, ThemeProvider, useThemeContext };
