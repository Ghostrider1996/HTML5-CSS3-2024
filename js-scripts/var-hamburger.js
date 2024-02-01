const menuStatus = document.querySelector('.hamburger');
const dropDown = document.querySelector('.mobile-dropdown-nav');

menuStatus.addEventListener('click', function () {
    dropDown.classList.toggle('active-1');
    // Add your hamburger icon animation code here
    const buttonOne = document.querySelector('.button-one');
    buttonOne.classList.toggle('animate'); // Assuming you have a CSS class for animation
});