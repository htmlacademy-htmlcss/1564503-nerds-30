let button=document.getElementById("write"),modal=document.getElementById("modal"),closeBtn=document.getElementById("close"),sliderButtons=document.querySelectorAll(".slider__button button"),slides=document.querySelectorAll(".slider__item"),products=document.querySelectorAll(".project__title"),modalProduct=document.getElementById("product__modal"),product__img=document.querySelector("#product__modal img"),productClose=document.getElementById("product__close");products.length>0&&products.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let l=e.getAttribute("id");modalProduct.classList.add("active"),product__img.setAttribute("src",`img/project/${l}.png`)})}),productClose.addEventListener("click",e=>{e.preventDefault(),modalProduct.classList.remove("active")}),button.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("active")}),closeBtn.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("active")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(modal.classList.contains("active")&&(e.preventDefault(),modal.classList.remove("active")),modalProduct.classList.contains("active")&&(e.preventDefault(),modalProduct.classList.remove("active")))});var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var t,l=document.querySelectorAll(".slider .slider__item"),d=document.querySelectorAll(".slider .slider__button button");if(l.length>0){for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),t=0;t<l.length;t++)l[t].style.display="none";for(t=0;t<d.length;t++)d[t].className=d[t].className.replace(" active","");l[slideIndex-1].style.display="grid",d[slideIndex-1].className+=" active"}}showSlides(slideIndex);