document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = 'Light Mode';
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
