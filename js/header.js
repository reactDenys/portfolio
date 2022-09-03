const header = document.getElementById('header');
const nav_toggle = document.getElementById('nav_toggle');
let isActive = false;

const headerPositionFixed = () => {
    header.style.position = 'fixed';   
    header.style.padding = '0 0';
    header.style.lineHeight = '0.8';
    header.style.transition = 'all .2s linear';
}

const headerPositionAbsolute = () => {
    header.style.position = 'absolute';
    header.style.lineHeight = '1.5';
}

const removeActiveClass = () => {
    nav_toggle.classList.remove('active');
    header.classList.remove('active');
    isActive = false;
}

const addActiveClass = () => {
    nav_toggle.classList.add('active');
    header.classList.add('active');
    isActive = true;
}



window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 600) {
        headerPositionFixed();
    } else {
        headerPositionAbsolute();
    }
});


nav_toggle.addEventListener("click", () => {
    if (isActive) {
        removeActiveClass();
    } else {
        addActiveClass();
    }
})

