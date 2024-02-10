let menuVisible = false;
//funtion visible or not
function showMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function skillEfect() {
    var skills = document.getElementById("skills");
    var skill_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skill_distance >= 300) {
        let skl = document.getElementsByClassName("progress");
        skl[0].classList.add("htmlcss");
        skl[1].classList.add("javascript");
        skl[2].classList.add("c");
        skl[3].classList.add("react");
        skl[4].classList.add("mysql");
        skl[5].classList.add("teamP");
        skl[6].classList.add("adaptability");
        skl[7].classList.add("analytical");
        skl[8].classList.add("dedicacion");
        skl[9].classList.add("proactivity");
    }
}



window.onscroll = function () {
    skillEfect();
} 
