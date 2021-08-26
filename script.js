var fullImg = document.getElementById("fullImg");
var fullImgBox = document.getElementById("fullImgBox");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

/*
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const main = document.querySelector('.main');

btnHamburger.addEventListener('click', function() {

    if(header.classList.contains('open')){
        body.classList.remove('noscroll'); // Close Hamburger Menu
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
          });       
      }

    else {
        body.classList.add('noscroll');
        header.classList.add('open');;
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
          });
    }
});
*/