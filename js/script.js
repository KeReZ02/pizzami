let btn = document.querySelector(".menu_gen__general__block button")
btn. addEventListener("click", ()=>{
    document.querySelector(".btn_none").style.display="block",
        document.querySelector(".menu_gen__general__block button").style.display="none"

})

var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
});
