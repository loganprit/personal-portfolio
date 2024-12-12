export const themeScript = `
  (function() {
    try {
      const storedTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const theme = storedTheme === "system" || !storedTheme ? systemTheme : storedTheme;
      
      // Remove any existing theme classes and data attributes
      document.documentElement.classList.remove("light", "dark");
      const dataAttrs = document.documentElement.getAttributeNames();
      dataAttrs.forEach(attr => {
        if (attr.startsWith("data-darkreader")) {
          document.documentElement.removeAttribute(attr);
        }
      });
      
      // Apply theme
      document.documentElement.classList.add(theme);
      document.documentElement.style.colorScheme = theme;
    } catch (e) {
      document.documentElement.classList.add("light");
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

export const readyScript = `
  (function() {
    // Wait for next tick to ensure DOM is ready
    setTimeout(() => {
      document.documentElement.classList.add('ready');
    }, 0);
  })();
`; 