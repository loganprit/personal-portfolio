export const themeScript = `
  (function() {
    try {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const storedTheme = localStorage.getItem('theme');
      const theme = storedTheme === 'system' || !storedTheme ? systemTheme : storedTheme;
      
      // Apply theme immediately
      document.documentElement.classList.add(theme);
      document.documentElement.style.setProperty('color-scheme', theme);
    } catch (e) {
      document.documentElement.classList.add('light');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  })();
`; 