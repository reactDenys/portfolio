const navbar = document.querySelectorAll('.navbar_item');

const setActive = (currentLink) => {
    if (! currentLink.classList.contains('active')){
        navbar.forEach(item => {
            item.classList.remove('active');
        });

        currentLink.classList.add('active');
    }
}

const activeFunk = (position) => {
    if (window.pageYOffset >= 0 && window.pageYOffset <= 600) {
        setActive(navbar[0])
    } else if (window.pageYOffset > 600 && window.pageYOffset <= 1050) {
        setActive(navbar[1])
    } else if (window.pageYOffset > 1050 && window.pageYOffset <= 1550) {
        setActive(navbar[2])
    } else if (window.pageYOffset > 1550) {
        setActive(navbar[3])
    }
}


window.addEventListener('scroll', activeFunk)