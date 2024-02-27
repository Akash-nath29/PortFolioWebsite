// Scroll Reveal 
window.sr = new ScrollReveal();

sr.reveal('.home', { delay: 300 });
sr.reveal('.about', { delay: 300 });
sr.reveal('.projects', { delay: 300 });
sr.reveal('.contact', { delay: 300 });
sr.reveal('.links', { delay: 300 });
sr.reveal('.footer', { delay: 300 });

//sticky navbar
let nav = document.getElementById("navbar");
let navLinkList = document.querySelector('.menuList');
let backToTop = document.getElementById("backToTop");
window.onscroll = () => {
    if (window.scrollY > 20) {
        nav.classList.add("sticky");
        navLinkList.classList.add("scrolledList");
        backToTop.style.display = "block";
    }
    else {
        nav.classList.remove("sticky");
        navLinkList.classList.remove("scrolledList");
        backToTop.style.display = "none";
    }
}

//collapsed navbar for mobile window

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

let menuBtn = document.getElementById("openMenuBtn");

let crossIcon = '<svg id="crossIcon" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512" onclick="toggleMenu()"><style>#crossIcon {fill:#ffffff; margin-right: 2vh;}</style><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';

let menuIcon = '<svg id="menuIcon" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" onclick="toggleMenu()"><style>#menuIcon{fill:#ffffff; margin-right: 2vh;}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
        menuBtn.innerHTML = crossIcon;
        menuBtn.style.display = "block";
    }
    else {
        menuList.style.maxHeight = "0px";
        menuBtn.innerHTML = menuIcon;
        menuBtn.style.display = "block";
    }

}

//sending Email

function sendMail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "anath5440@gmail.com",
        Password: "FF849425973D9801865E72568398DF0F985B",
        To: 'akashnathkrishnagar@gmail.com',
        From: document.getElementById("emailInput").value,
        Subject: "User Enquery",
        Body: document.getElementById("nameInput").value + " says: <br/>" + document.getElementById("textarea").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}

// SlideShow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Automatic scrolling every 3 seconds
setInterval(function () {
    plusSlides(1);
}, 3000);