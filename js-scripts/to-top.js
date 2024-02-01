const toTop = document.querySelector('.to-top');

// Function to scroll to the specified element
function scrollToTop() {
    // Find the element with the ID "scroll-to-top"
    const element = document.getElementById('scroll-to-top');

    // Check if the element exists
    if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}

// Show/hide the "To Top" button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1300) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

