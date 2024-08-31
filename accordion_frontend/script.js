document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Toggle the current section
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                // Close all other sections
                document.querySelectorAll('.accordion-content').forEach(c => {
                    c.classList.remove('show');
                });
                content.classList.add('show');
            }
        });
    });
});
