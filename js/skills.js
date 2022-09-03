const skills = document.querySelectorAll('.skill_experience_percent');

const setSkillCount = (skills, perc) => {
    for (let i = 0; i <= skills.length - 1; i++) {
        skills[i].style.width = `${perc[i]}%`;
        skills[i].style.transition = 'all .5s linear';
    }
}

const perc = [90, 85, 79, 91, 63, 92];
let i = false;

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 300) {
        if (i === false) {
            setSkillCount(skills, perc);
            i = true;
        }
    }
});


