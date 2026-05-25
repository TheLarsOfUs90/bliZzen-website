const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Standard: Dark Mode
toggleBtn.textContent = '⚡';

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        toggleBtn.textContent = '⚡';
    } else {
        toggleBtn.textContent = '⚡';
    }
});