//otvírání a zavírání kontaktního boxu

function openContactBox() {
    let contactWindow = document.getElementById("window-contact");
    contactWindow.style.display = "block";
}

function closeContactBox() {
    let contactWindow = document.getElementById("window-contact");
    contactWindow.style.display = "none";
}

//akce po najetí na navbar-brand

function changeLogoToColor() {
    let image = document.getElementById("logoImage");
    let textShort = document.getElementById("logoTextShort");
    let textLong = document.getElementById("logoTextLong");
    
    image.src = "/assets/images/logo-color.png";
    textShort.style.color = "hsl(220, 90%, 56%)";
    textLong.style.color = "hsl(220, 90%, 56%)";
}

function changeLogoBack() {
    let image = document.getElementById("logoImage");
    let textShort = document.getElementById("logoTextShort");
    let textLong = document.getElementById("logoTextLong");

    image.src = "/assets/images/logo.png";
    textShort.style.color = "white";
    textLong.style.color = "white";
}

const navbarBrand = document.getElementById('navbar-brand');

navbarBrand.addEventListener('mouseover', changeLogoToColor);
navbarBrand.addEventListener('mouseout', changeLogoBack);
// navbarBrand.addEventListener('touchstart', changeLogoToColor);
// navbarBrand.addEventListener('touchmove', changeLogoToColor);
// navbarBrand.addEventListener('touchend', changeLogoBack);