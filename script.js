const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const toggleIcon = document.querySelector('.toggle-icon');

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    toggleIcon.textContent = savedTheme === 'dark' ? '☀' : '☾';
} else {
    // If no saved preference, check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleIcon.textContent = systemPrefersDark ? '☀' : '☾';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleIcon.textContent = newTheme === 'dark' ? '☀' : '☾';
});

// Event listener to update the icon when the theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        toggleIcon.textContent = e.matches ? '☀' : '☾';
    }
});
// Vim-like keybindings
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'j':
      window.scrollBy({top: 100, behavior: 'smooth'});
      break;
    case 'k':
      window.scrollBy({top: -100, behavior: 'smooth'});
      break;
    case 'g':
      if (event.key === 'g')  {
          window.scrollBy({top: -document.body.scrollHeight, behavior: 'smooth'});
      }
      break;
    case 'G':
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
      break;
  }
});
