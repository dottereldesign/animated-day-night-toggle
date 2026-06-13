const themeSwitchers = document.querySelectorAll(".theme-switcher-grid");
const colorInputs = document.querySelectorAll("[data-color-var]");
const copyButton = document.querySelector("[data-copy-llm]");
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

themeSwitchers.forEach((switcher) => {
  switcher.addEventListener("click", () => {
    const isNightTheme = switcher.classList.toggle("night-theme");
    switcher.setAttribute("aria-pressed", String(isNightTheme));

    const hasNightTheme = [...themeSwitchers].some((button) =>
      button.classList.contains("night-theme")
    );

    document.body.classList.toggle("has-night", hasNightTheme);
    document.body.style.backgroundColor = hasNightTheme
      ? "var(--bg-color-dark)"
      : "var(--bg-color-light)";
  });
});

colorInputs.forEach((input) => {
  input.addEventListener("input", () => {
    document.documentElement.style.setProperty(input.dataset.colorVar, input.value);
  });
});

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(llmPrompt);
    copyButton.textContent = "Copied";
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
    copyButton.textContent = "Copied";
  }

  window.setTimeout(() => {
    copyButton.textContent = "Context for AI";
  }, 1800);
});
