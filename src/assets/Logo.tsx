import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function Logo() {
  const themeContext = useContext(ThemeContext);

  return (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none">
      <line
        x1="0.5"
        y1="2.18557e-08"
        x2="0.499999"
        y2="28"
        stroke={themeContext.colors.primary}
      />
      <line
        x1="7.5"
        y1="2.18557e-08"
        x2="7.5"
        y2="17.5"
        stroke={themeContext.colors.primary}
      />
      <line
        x1="21.5"
        y1="10.5"
        x2="21.5"
        y2="28"
        stroke={themeContext.colors.primary}
      />
      <line
        x1="14.5"
        y1="2.18557e-08"
        x2="14.5"
        y2="28"
        stroke={themeContext.colors.primary}
      />
      <line
        x1="28.5"
        y1="2.18557e-08"
        x2="28.5"
        y2="28"
        stroke={themeContext.colors.primary}
      />
    </svg>
  );
}
