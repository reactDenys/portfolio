import {skills, setSkillCount, perc, i} from './skills.js'
import {setActive, activeFunk, navbar} from './navbar.js'
import {header, header_content, fun1} from './header.js'

document.addEventListener('DOMContentLoaded', () => {
    let scrollPos = window.scrollY;
    console.log(scrollPos)
    if (scrollPos >= 600) {
        fun1();
    } else if (scrollPos > 300) {
        setSkillCount(skills, perc);
        i = true;
    } else if (scrollPos >= 0 && scrollPos <= 600) {
        setActive(navbar[0])
    } else if (scrollPos > 600 && scrollPos <= 1050) {
        setActive(navbar[1])
    } else if (scrollPos > 1050 && scrollPos <= 1550) {
        setActive(navbar[2])
    } else if (scrollPos > 1550) {
        setActive(navbar[3])
    })
});