document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const hamburger = document.querySelector('nav .hamburger-menu');
    const navLinks = document.querySelector('nav .nav-links');

    console.log('Hamburger element:', hamburger);
    console.log('Nav links element:', navLinks);

    if (hamburger && navLinks) {
        console.log('Both elements found, adding event listener');
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicked');
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            console.log('Nav links classes:', navLinks.classList);
            console.log('Hamburger classes:', hamburger.classList);
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                console.log('Nav link clicked');
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    } else {
        console.error('Hamburger or nav links element not found');
        console.log('HTML content of nav:', document.querySelector('nav').innerHTML);
    }
});