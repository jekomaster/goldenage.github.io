document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Retrieve the current theme from localStorage
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply the theme to the document
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Synchronize the toggle position with the current theme
  themeToggle.checked = currentTheme === 'dark';

  // Add event listener for theme toggle
  themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
