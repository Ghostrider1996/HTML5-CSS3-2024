document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    const classTitles = document.querySelectorAll('.class');

    sections.forEach(section => {
        const editButton = section.querySelector('.edit-button');
        const updateButton = section.querySelector('.update-button');
        const checkboxes = section.querySelectorAll('input[type="checkbox"]');

        editButton.addEventListener('click', () => {
            checkboxes.forEach(checkbox => {
                checkbox.style.display = 'inline-block';
            });
        });

        updateButton.addEventListener('click', () => {
            checkboxes.forEach(checkbox => {
                checkbox.style.display = 'none';
            });
        });
    });

    classTitles.forEach(title => {
        title.addEventListener('change', () => {
            if (title.classList.contains('cross')) {
                title.classList.remove('cross');
            } else {
                title.classList.add('cross');
            }
        });
    });
});
