burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');



burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})

function submitClick() {

    document.getElementById("lblName").innerHTML = document.getElementById("name").value;
    document.getElementById("lblEmail").innerHTML = document.getElementById("email").value;
    document.getElementById("lblMobile").innerHTML = document.getElementById("mobile").value;
    document.getElementById("lblConcern").innerHTML = document.getElementById("concern").value;

}