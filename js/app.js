let tab_nav = document.querySelector(".tab-nav");
let side_nav = document.querySelector(".side-nav");
let icon_1 = document.querySelector("#icon-1");
icon_1.addEventListener("click", function(){
    if(tab_nav.style.display == "none"){
        tab_nav.style.display = "block";
        side_nav.style.display = "none";
    }else{
        tab_nav.style.display = "none";
        side_nav.style.display = "block";
    }
});