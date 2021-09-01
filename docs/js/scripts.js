const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColor = document.getElementById('toggle-color');

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (toggleIcon.classList.contains('fa-moon')) {
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
    toggleText.textContent = 'Light Mode';
  } else {
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
    toggleText.textContent = 'Dark Mode';
  }
});

toggleColor.addEventListener('click', e => {
  if (e.target.classList.contains('colors__item')) {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
  }
});
