document.querySelector('.toggle-menu').addEventListener('click', () => {
    document.querySelectorAll('.line1-menu, .line2-menu, .line3-menu').forEach(line => {
        line.classList.toggle(`active${line.classList[0]}`);
    });

    document.querySelector('.menu').classList.toggle('show-menu');
    document.querySelector('.back-menu').classList.toggle('show-back-menu')
    document.querySelector('.toggle-menu').classList.toggle('toggle-menu-activate')
});

function setVhProperty() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVhProperty);
window.addEventListener('load', setVhProperty);

