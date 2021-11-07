const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleMode(mode) {
  const dark = mode === DARK_THEME;

  nav.style.backgroundColor = dark
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = dark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = dark ? 'Dark Mode' : 'Light Mode';
  dark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode(dark ? DARK_THEME : LIGHT_THEME);
}

// // Dark Mode
// function darkMode() {
//   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//   textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//   toggleIcon.children[0].textContent = 'Dark Mode';
//   imageMode('dark');
// }

// function lightMode() {
//   nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//   textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//   toggleIcon.children[0].textContent = 'Light Mode';
//   toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//   imageMode('light');
// }

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    localStorage.setItem('theme', DARK_THEME);
    toggleMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME);
    toggleMode(LIGHT_THEME);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleMode(DARK_THEME);
  }
}
