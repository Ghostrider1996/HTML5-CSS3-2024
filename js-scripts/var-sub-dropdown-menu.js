const subButton = document.querySelector('.dropdown-button'); // Update this selector to match your button
const subDropDown = document.querySelector('#sub-drop-down'); // Update this selector
subButton.addEventListener('click', function () { // Change menuStatus to subButton
    subDropDown.classList.toggle('active-2');
});