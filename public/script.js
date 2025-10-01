const backToTopButton = document.getElementById('back-to-top'); 

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
        setTimeout(() => {
            backToTopButton.classList.add('show');
        },10);
    } else {
        backToTopButton.classList.remove('show');
        setTimeout(() => {
            backToTopButton.style.display = 'none';
        },300);
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});