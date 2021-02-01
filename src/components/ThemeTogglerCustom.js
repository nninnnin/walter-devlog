import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import BrightIcon from './BrightIcon';
import DarkIcon from './DarkIcon';

const ThemeTogglerCustom = () => {
  return (
    <ThemeToggler>
      {({ toggleTheme, theme }) => {
        const isDarkMode = theme === "dark"
        if (theme == null) {
          return null
        }

        return (
          <button
            aria-label="theme-switch"
            className="leading-none p-1"
            onClick={() => toggleTheme(isDarkMode ? "light" : "dark")}
          >
            {isDarkMode ? (
              <DarkIcon />
            ) : (
              <BrightIcon />
            )}
          </button>
        )
      }}
    </ThemeToggler>
  );
};

export default ThemeTogglerCustom;
