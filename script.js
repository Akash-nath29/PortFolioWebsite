let nav = document.getElementById("navbar");
window.onscroll = () => {
    if (window.scrollY > 20) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
}

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px" ;

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }

}