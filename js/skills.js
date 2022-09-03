const skills = document.querySelectorAll('.skill_experience_percent');
const perc = [90, 85, 79, 91, 63, 92];
let animatedSkills = false;

const setSkillCount = (skills, perc) => {
    for (let i = 0; i <= skills.length - 1; i++) {
        skills[i].style.width = `${perc[i]}%`;
        skills[i].style.transition = 'all .5s linear';
    }
}


window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 300) {
        if (!animatedSkills) {
            setSkillCount(skills, perc);
            animatedSkills = true;
        }
    }
});


