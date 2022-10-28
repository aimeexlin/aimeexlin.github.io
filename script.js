function showDetails(name) {
    var text = document.getElementById(name)
    var title = document.getElementById("p"+name)
    var tile = document.getElementById("t"+name)
    text.style.display="block";
    title.style.backdropFilter="brightness(50%) blur(1px)";
}
function hideDetails(name) {
    var text = document.getElementById(name)
    var title = document.getElementById("p"+name)
    var tile = document.getElementById("t"+name)
    text.style.display="none";
    title.style.backdropFilter="brightness(75%)";
}
function showAll() {
    var array = document.getElementsByClassName("tile");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="block";
      }
    var array2 = document.getElementsByClassName("tag");
    for (let j = 0; j < array2.length; j++) {
        array2[j].style.color="white";
        array2[j].style.backgroundColor="#363434";
    }
    document.getElementById("all").style.color="#181717";
    document.getElementById("all").style.backgroundColor="#B6D7E4";
}
function filterBy(name) {
    var array = document.getElementsByClassName("tile");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="none";
      }
    var array2 = document.getElementsByClassName(name);
    for (let j = 0; j < array2.length; j++) {
        array2[j].style.display="block";
    }
    var array3 = document.getElementsByClassName("tag");
    for (let k = 0; k < array3.length; k++) {
        array3[k].style.color="white";
        array3[k].style.backgroundColor="#363434";
    }
    document.getElementById(name).style.color="#181717";
    document.getElementById(name).style.backgroundColor="#B6D7E4";
}