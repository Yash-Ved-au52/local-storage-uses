// Buttons
const lightThemeBtn = document.getElementById('lightTheme');
const darkThemeBtn = document.getElementById('darkTheme');
const gradientThemeBtn = document.getElementById('gradientTheme');

// Apply saved theme from localStorage
document.body.className = localStorage.getItem('theme') || 'light';

// Event Listeners for theme buttons
lightThemeBtn.addEventListener('click', () => {
  document.body.className = 'light';
  localStorage.setItem('theme', 'light'); // Save theme
});

darkThemeBtn.addEventListener('click', () => {
  document.body.className = 'dark';
  localStorage.setItem('theme', 'dark'); // Save theme
});

gradientThemeBtn.addEventListener('click', () => {
  document.body.className = 'gradient';
  localStorage.setItem('theme', 'gradient'); // Save theme
});
