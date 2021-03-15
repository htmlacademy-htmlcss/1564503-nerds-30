let button = document.getElementById('write')
let modal = document.getElementById('modal')
let closeBtn = document.getElementById('close')
let sliderButtons = document.querySelectorAll('.slider__button button')
let slides = document.querySelectorAll('.slider__item')
let products = document.querySelectorAll('.project__title')
let modalProduct = document.getElementById('product__modal')
let product__img = document.querySelector('#product__modal img')

if (products.length > 0) {
  products.forEach(element => {
    element.addEventListener('click',(e)=> {
      e.preventDefault()
      let idElement = element.getAttribute('id');
      modalProduct.classList.add('active')
      product__img.setAttribute('src',`img/project/${idElement}.png`)
    })
  })
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
    if (modalProduct.classList.contains("active")) {
      e.preventDefault();
      modalProduct.classList.remove("active");
    }
  }
}); 




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
  var slides = document.querySelectorAll('.slider .slider__item')
  var dots = document.querySelectorAll('.slider .slider__button button')
  if(slides.length>0) {
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
}

