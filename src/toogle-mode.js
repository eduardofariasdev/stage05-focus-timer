let isDarkMode = true;
const buttonToggleMode = document.getElementById('btn-toggle-mode');

buttonToggleMode.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light');

  let mode = isDarkMode ? 'dark' : 'light';

  event.currentTarget.querySelector('span').textContent = `Ativar ${mode} mode.`;

  isDarkMode = !isDarkMode;
});
