document.addEventListener('DOMContentLoaded', () => {
    const asideNav = document.querySelector('.aside-nav');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        asideNav.classList.toggle('show');

        if (asideNav.classList.contains('show')) {
            // If 'show' class is present, set the right property to 35rem
            hamburger.style.right = '35rem';
        } else {
            // If 'show' class is not present, set the right property to 30px
            hamburger.style.right = '30px';
        }

    });
});
