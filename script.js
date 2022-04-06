let mainHero = document.querySelector('.mainHero');
let moveBy = 10;
window.addEventListener('load', () => {
    mainHero.style.position = 'absolute';
    mainHero.style.left = 0;
    mainHero.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            mainHero.style.left = parseInt(mainHero.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            mainHero.style.left = parseInt(mainHero.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            mainHero.style.top = parseInt(mainHero.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            mainHero.style.top = parseInt(mainHero.style.top) + moveBy + 'px';
            break;
    }
});