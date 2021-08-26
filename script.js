var fullImg = document.getElementById("fullImg");
var fullImgBox = document.getElementById("fullImgBox");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    body.classList.add('noscroll');
}

function closeFullImg() {
    fullImgBox.style.display = "none";
    body.classList.remove('noscroll');
}


const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const section = document.querySelector('.first-section');

btnHamburger.addEventListener('click', function() {

    if(header.classList.contains('open')){
        body.classList.remove('noscroll'); // Close Hamburger Menu
        header.classList.remove('open');
        section.classList.remove('hide');
        section.classList.add('show');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
          });       
      }

    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        section.classList.add('hide');
        section.classList.remove('show');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
          });
    }
});
