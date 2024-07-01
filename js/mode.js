const body = document.querySelector('body');
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

// Function to enable dark mode
function darkMode() {
    darkBtn.classList.add('hidden');
    lightBtn.classList.remove('hidden');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'Dark');
}

// Function to enable light mode
function lightMode() {
    darkBtn.classList.remove('hidden');
    lightBtn.classList.add('hidden');
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'Light');
}

// Check and apply the saved theme on page load
let mode = localStorage.getItem('theme');
if (mode === 'Dark') {
    darkMode();
} else {
    lightMode();
}

// Event listeners for the buttons
darkBtn.addEventListener('click', darkMode);
lightBtn.addEventListener('click', lightMode);
