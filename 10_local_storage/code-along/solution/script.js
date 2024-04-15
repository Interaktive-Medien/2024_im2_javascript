const nameCt = document.querySelector('#name');
const skillsCt = document.querySelector('#skills');
const addInput = document.querySelector('#add');
const skillsFallback = 'ganz schön viel';

// -> handle name
let name = localStorage.getItem('name');
if (!name) {
    name = prompt('Gib deinen Namen ein.');
    localStorage.setItem('name', name);
}
nameCt.innerText = name;

// -> initialize skills
let skills = localStorage.getItem('skills');
if (skills) {
    skills = JSON.parse(skills);
} else {
    skills = [skillsFallback];
    localStorage.setItem('skills', JSON.stringify(skills));
}

// -> visualize skills
function visualizeSkills () {
    skillsCt.innerHTML = '';
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.innerText = skill;
        skillsCt.appendChild(span);
    })
}
visualizeSkills();

// -> add skills
addInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.value.length >= 2) {
        skills.push(e.target.value);
        if (skills.includes(skillsFallback)) {
            const index = skills.indexOf(skillsFallback);
            skills.splice(index,1);
        }
        localStorage.setItem('skills', JSON.stringify(skills));
        add.value = '';
        visualizeSkills();
    }
})
