document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check local storage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-layout');
    }

    // Toggle dark mode on click
    darkModeToggle.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.toggle('dark-layout');

        // Save the preference in local storage
        if (body.classList.contains('dark-layout')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});
