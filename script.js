var fullImg = document.getElementById("fullImg");
var navLinks = document.getElementById("navLinks"); 
var fullImgBox = document.getElementById("fullImgBox");

function showMenu() 
{
    navLinks.style.right = "0px";
}

function hideMenu() 
{
    navLinks.style.right = "-200px";
}

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}




