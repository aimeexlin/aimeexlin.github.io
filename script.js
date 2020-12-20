// MOUSE OVER
function abouthover() {
    document.getElementById("abouttext").innerHTML = "(about)";
    document.getElementById("default").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("featured").style.display = "none";
}
function projectshover() {
    document.getElementById("projectstext").innerHTML = "(projects)";
    document.getElementById("default").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("featured").style.display = "none";
}
function featuredhover() {
    document.getElementById("featuredtext").innerHTML = "(featured)";
    document.getElementById("default").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("featured").style.display = "block";
}

// MOUSE OUT
function aboutout() {
    document.getElementById("abouttext").innerHTML = "about";
    document.getElementById("default").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("featured").style.display = "none";
}
function projectsout() {
    document.getElementById("projectstext").innerHTML = "projects";
    document.getElementById("default").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("featured").style.display = "none";
}
function featuredout() {
    document.getElementById("featuredtext").innerHTML = "featured";
    document.getElementById("default").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("featured").style.display = "none";
}
