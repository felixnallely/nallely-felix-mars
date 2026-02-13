const body = document.body; 

//----------- FOOTER -----------//
let footer = document.createElement("footer");
body.appendChild(footer);

//Copyright Text
const today = new Date();
const thisYear = today.getFullYear();

footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Copyright © ${thisYear} Nallely Felix. All rights reserved.`;
footer.appendChild(copyright); 
footer.style.textAlign = "center"; 

//----------- SKILLS -----------//
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul"); 

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};