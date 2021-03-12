let button = document.getElementById('write')
let modal = document.getElementById('modal')
let closeBtn = document.getElementById('close')
let sliderButtons = document.querySelectorAll('.slider__button button')
let slides = document.querySelectorAll('.slider__item')


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll('.slider__item')
  var dots = document.querySelectorAll('.slider__button button')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
}


button.addEventListener('click',function(e) {
    e.preventDefault()
    modal.classList.add('active')
})


closeBtn.addEventListener('click',function(e) {
    e.preventDefault()
    modal.classList.remove('active')
})

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
      if (modal.classList.contains("active")) {
        e.preventDefault();
        modal.classList.remove("active");
      }
    }
  });