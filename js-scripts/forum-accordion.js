
document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll('.fas');

    icons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            const ctgContainer = icon.closest('.ctg');
            const sectionsContent = ctgContainer.querySelector('.section');
           
            if (sectionsContent.classList.contains('open')) {
                sectionsContent.classList.remove('open');
                sectionsContent.classList.add('close');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                sectionsContent.classList.remove('close');
                sectionsContent.classList.add('open');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});


