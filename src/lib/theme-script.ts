export const viewportScript = `
  (function() {
    function setViewportHeight() {
      const vh = window.innerHeight * 0.01;
      const isIPad = /iPad|iPhone|iPod/.test(navigator.platform) || 
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      
      document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
      document.documentElement.style.setProperty('--real-vh', \`\${vh}px\`);
      
      // Add iPad-specific class
      if (isIPad) {
        document.documentElement.classList.add('is-ipad');
      }
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', () => {
      // Delay to ensure correct height after orientation change
      setTimeout(setViewportHeight, 200);
    });
  })();
`;

export const themeScript = `
  ${viewportScript}
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

export const cleanupScript = `
  (function() {
    const html = document.documentElement;
    const attrs = html.getAttributeNames();
    attrs.forEach(attr => {
      if (attr.startsWith('data-') && 
          attr !== 'data-theme' && 
          attr !== 'data-color-scheme') {
        html.removeAttribute(attr);
      }
    });
  })();
`;

// Update the script combination
export const combinedScript = `
  ${viewportScript}
  ${themeScript}
  ${cleanupScript}
`; 