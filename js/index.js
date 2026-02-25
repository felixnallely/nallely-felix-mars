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
const messageForm = document.querySelector("form[name=leave_message]"); 

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value; 

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

// ----------- PROJECT SECTION ----------- //
fetch ("https://api.github.com/users/felixnallely/repos")
  .then(response => response.json())
  .then((response) => {
    if (!response.ok) {
        throw new Error ("Failed to fetch repositories. Please try again later.");
    }

    return response();
  })
  .then((repositories) => {
    repositories = JSON.parse(this.repositories);
    console.log("Repositories: ", repositories);
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");
        const link = document.createElement("a");
        link.href = repositories[i].html_url;
        link.textContent = repositories[i].name;
        project.appendChild(link);
        projectList.appendChild(project);
    }
 })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
    const projectSection = document.getElementById("Projects");
    const errorMessage = document.createElement("p");
    errorMessage.innerHTML = "Unable to load projects. Please try again later.";
    projectSection.appendChild(errorMessage);
  });