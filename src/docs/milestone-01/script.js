
document.addEventListener('DOMContentLoaded', () => {
    const sectionHeaders = document.querySelectorAll('section h2');

    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle the 'active' class to display or hide the content
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });

        // Initially hide the content
        const content = header.nextElementSibling;
        content.style.maxHeight = null;
    });
});
