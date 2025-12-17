document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an anchor link to a section on the same page
            if (this.hash !== "") {
                e.preventDefault();

                const hash = this.hash;
                const targetElement = document.querySelector(hash);

                // Use the scrollIntoView method for smooth scrolling
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
