let nav = document.getElementById("navbar");
let sticky = nav.offsetTop; window.onscroll = () => {

    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
}