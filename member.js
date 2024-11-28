function skillsHeader(){
    var skills = document.getElementsByClassName("skills");
    var header = document.getElementsByClassName("header");
    var i;
    for (i = 0; i < skills.length; i++) {
        skills[i].style.display = "block";
    }
    for (i = 0; i < header.length; i++) {
        header[i].style.display = "none";
    }
}
