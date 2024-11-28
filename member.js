function skillsMember() {
  // This function is called when the member page is loaded
  // It fetches the member's skills and displays them in a list
  // The list is displayed in a div with the id "skills"
  let skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];
  let skillsDiv = document.getElementById("skills");
  for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsDiv.appendChild(skill);
  }
}
