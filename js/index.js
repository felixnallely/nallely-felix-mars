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

//----------- MESSAGE FORM -----------//
const messageForm = document.querySelector("form[name=leave_messages]"); 

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const userMessage = event.target.userMessage.value; 

    console.log("Name: " + userName);
    console.log("Email: " + userEmail);
    console.log("Message: " + userMessage);

    const messageSection = document.getElementById("Messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> <span>${userMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});