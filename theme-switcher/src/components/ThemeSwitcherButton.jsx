import React from "react";
import "./ThemeSwitcherButton.css";

const ThemeSwitcherButton = ({ id, size, isNight, onToggle }) => {
  const maskId = `crescent-mask-${id}`;

  return (
    <button
      className={`theme-switcher-grid theme-switcher-grid--${size} ${isNight ? "night-theme" : ""}`}
      type="button"
      aria-label="Switch theme"
      aria-pressed={isNight}
      onClick={onToggle}
    >
      <svg className="orb" aria-hidden="true" viewBox="0 0 20 20">
        <defs>
          <mask id={maskId}>
            <rect width="20" height="20" fill="white" />
            <circle className="orb-cutout" cx="6.5" cy="10" r="9" fill="black" />
          </mask>
        </defs>
        <circle className="orb-disc" cx="10" cy="10" r="10" mask={`url(#${maskId})`} />
      </svg>
      <span className="cloud-ball cloud-ball-left" aria-hidden="true" />
      <span className="cloud-ball cloud-ball-middle" aria-hidden="true" />
      <span className="cloud-ball cloud-ball-right" aria-hidden="true" />
      <span className="cloud-ball cloud-ball-top" aria-hidden="true" />
      <span className="star star-1" aria-hidden="true" />
      <span className="star star-2" aria-hidden="true" />
      <span className="star star-3" aria-hidden="true" />
      <span className="star star-4" aria-hidden="true" />
    </button>
  );
};

export default ThemeSwitcherButton;
