import React, { useEffect, useMemo, useState } from "react";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";
import "./App.css";

const defaultColors = {
  night: "#272a30",
  day: "#0dbdf6",
  moon: "#fffdf2",
  sun: "#fabc1c",
  stars: "#fffdf2",
  clouds: "#fffdf2",
};

const colorGroups = [
  {
    label: "Sky",
    controls: [
      ["Day", "day"],
      ["Night", "night"],
    ],
  },
  {
    label: "Light",
    controls: [
      ["Sun", "sun"],
      ["Moon", "moon"],
    ],
  },
  {
    label: "Detail",
    controls: [
      ["Stars", "stars"],
      ["Clouds", "clouds"],
    ],
  },
];

const llmPrompt = `Add this free-to-use animated day/night theme toggle to my website.

What to build:
- A polished dark mode / light mode toggle component.
- The sun should roll across the switch and become a thick crescent moon.
- Clouds should transition into stars.
- Include three sizes: small, compact, and medium.
- Include live color controls for Day sky, Night sky, Sun, Moon, Stars, and Clouds.
- Keep the spacing on a 4px scale.
- Make it accessible with button elements, aria-label, and aria-pressed.
- Use CSS variables so the colors are easy to theme.
- Use plain HTML, CSS, and vanilla JavaScript. No framework required.

Source / reference:
https://codepen.io/jamiewilsonict/pen/LYKGjdb

Credit:
Created by Jamie Wilson / Dotterel Design.
Free to use, remix, and adapt.`;

function App() {
  const [colors, setColors] = useState(defaultColors);
  const [activeSwitches, setActiveSwitches] = useState({
    small: false,
    compact: false,
    medium: false,
  });
  const [copyLabel, setCopyLabel] = useState("Context for AI");

  const hasNight = Object.values(activeSwitches).some(Boolean);

  const themeVars = useMemo(
    () => ({
      "--day-bg-color": colors.day,
      "--night-bg-color": colors.night,
      "--sun-color": colors.sun,
      "--moon-color": colors.moon,
      "--star-color": colors.stars,
      "--cloud-color": colors.clouds,
    }),
    [colors]
  );

  useEffect(() => {
    document.body.classList.toggle("has-night", hasNight);
    document.body.style.backgroundColor = hasNight
      ? "var(--bg-color-dark)"
      : "var(--bg-color-light)";
  }, [hasNight]);

  const updateColor = (key, value) => {
    setColors((currentColors) => ({
      ...currentColors,
      [key]: value,
    }));
  };

  const toggleSwitch = (size) => {
    setActiveSwitches((currentSwitches) => ({
      ...currentSwitches,
      [size]: !currentSwitches[size],
    }));
  };

  const copyForAi = async () => {
    try {
      await navigator.clipboard.writeText(llmPrompt);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = llmPrompt;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopyLabel("Copied");
    window.setTimeout(() => setCopyLabel("Context for AI"), 1800);
  };

  return (
    <div className="App" style={themeVars}>
      <main className="demo" aria-label="Theme switcher demo">
        <header className="intro">
          <h1>Animated Day Night Toggle</h1>
          <p>
            A customizable dark mode and light mode theme switcher where the sun rolls into a
            crescent moon, clouds become stars, and every key color can be tuned live. Built for
            CodePen and free to use.
          </p>
        </header>

        <h2>Toggles</h2>
        <section className="switcher-stack" aria-label="Theme switcher size variations">
          {["small", "compact", "medium"].map((size) => (
            <ThemeSwitcherButton
              key={size}
              id={size}
              size={size}
              isNight={activeSwitches[size]}
              onToggle={() => toggleSwitch(size)}
            />
          ))}
        </section>

        <h2 className="color-heading">Color</h2>
        <form className="controls" aria-label="Color settings">
          {colorGroups.map((group) => (
            <fieldset key={group.label}>
              <legend>{group.label}</legend>
              {group.controls.map(([label, key]) => (
                <label key={key}>
                  <span>{label}</span>
                  <input
                    type="color"
                    value={colors[key]}
                    onChange={(event) => updateColor(key, event.target.value)}
                  />
                </label>
              ))}
            </fieldset>
          ))}
        </form>

        <p className="license-note">Free to use, remix, and adapt.</p>
      </main>

      <button className="copy-llm-button" type="button" onClick={copyForAi}>
        {copyLabel}
      </button>

      <a
        className="github-link"
        href="https://github.com/dottereldesign"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open GitHub profile"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.79c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
        </svg>
        <span>Jamie Wilson</span>
      </a>
    </div>
  );
}

export default App;
