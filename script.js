function showDetails(name) {
    document.getElementById(name).style.display="block";
    document.getElementById("p"+name).style.backdropFilter="brightness(50%) blur(1px)";
}
function hideDetails(name) {
    document.getElementById(name).style.display="none";
    document.getElementById("p"+name).style.backdropFilter="brightness(75%)";
}