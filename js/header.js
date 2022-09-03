const header = document.getElementById('header');
const header_content = document.getElementById('header_content');

const fun1 = () => {
    header.style.background = "linear-gradient(to left, #00c9ff, #92fe9d)";
    header.style.position = 'fixed';   
    header.style.padding = '0 0';
    header_content.style.padding = '20px 0';
    header.style.lineHeight = '0.8';
    header.style.transition = 'all .2s linear'
}

const fun2 = () => {
    header.style.background = "none";
    header.style.position = 'absolute';
    header.style.lineHeight = '1.5';
    header_content.style.padding = '30px 0';
}


window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 600) {
        fun1();
    } else {
        fun2();
    }
});

