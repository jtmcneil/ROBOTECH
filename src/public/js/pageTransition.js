
function transitionToPage(href) {
    const currentPage = document.querySelector('.page');
    currentPage.classList.add('page-exit');

    setTimeout(() => {
        window.location.href = href;
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a.transition-link');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const href = event.currentTarget.href;
            transitionToPage(href);
        });
    });
});